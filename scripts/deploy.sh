#!/usr/bin/env bash
# ==============================================================
# Deploys the compiled output of a Next.js build to a specified
# Github repo's `gh-pages` branch.
#
# https://github.com/thierryc/Next-gh-page-example
# https://gist.github.com/dciccale/5560837
# ==============================================================

# checks if branch has something pending
function parse_git_dirty() {
  git diff --quiet --ignore-submodules HEAD 2>/dev/null; [ $? -eq 1 ] && echo "*"
}

# gets the current git branch
function parse_git_branch() {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/\1$(parse_git_dirty)/"
}

# get last commit hash prepended with @ (i.e. @8a323d0)
function parse_git_hash() {
  git rev-parse --short HEAD 2> /dev/null | sed "s/\(.*\)/@\1/"
}

GIT_BRANCH=$(parse_git_branch)$(parse_git_hash)

rm -rf node_modules/.cache
&& npx next build
&& npx next export
&& touch out/.nojekyll
&& touch out/CNAME
&& mkdir out/public
&& cp -r public/* out/public/
&& echo \"edwardcoyle.dev\" >> out/CNAME
&& git add out/
&& git commit \"Deploy `/out` folder at ${GIT_BRANCH} to `gh-pages` branch\"
&& git subtree push --prefix out origin gh-pages
