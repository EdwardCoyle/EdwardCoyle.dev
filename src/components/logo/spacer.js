/**
 * These are the spacer triangles used in-between the
 * bullet points on the Interactive Logo.
 */
function LogoSpacer() {
  return (
    <>
      <svg className="logo--spacer icon" role="presentation">
        <use xlinkHref="#single-triangle"></use>
      </svg>
    </>
  );
};

export default LogoSpacer;
