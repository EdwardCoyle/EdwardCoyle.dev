/**
 * @param {string} postName
 * @returns {string} containing the sanitized post name
 */
export function sanitizePostName(postName) {
  const JUNK_WORDS = [
    'a', 'of', 'it', 'the', 'this', 'that', 'and', 'of', 'for'
  ];

  let str = postName.replace(/[^\w\s-]/gi, '').toLowerCase();
  str = str.split(/\s-/gi);
  str = str.filter((word) => {
    return word !== '' && JUNK_WORDS.indexOf(word) === -1;
  });
  str = str.join('-');

  return str;
};
