/**
 * These are the spacer triangles used in-between the
 * bullet points on the Interactive Logo.
 */
const LogoBullet = (props) => {
  return (
    <div className="masthead--bullet">
      {props.children}
    </div>
  );
};

export default LogoBullet;
