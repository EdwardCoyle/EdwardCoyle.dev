/**
 * Properly contains background elements with an overflow setting
 */
function BackgroundContainer(props) {
  return (
    <>
      <div className="background-container">
        {props.children}
      </div>
      <style jsx>{`
        .background-container {
          height: 100%;
          left: 0;
          overflow: hidden;
          position: absolute;
          pointer-events: none;
          top: 0;
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default BackgroundContainer;
