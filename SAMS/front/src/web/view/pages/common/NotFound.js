import React from "react";

import { global, bootstrap as BT } from "../../../js/util/commonUtil";

function NotFound(props) {
  const body = {
    margin: 0,
  };
  const styling = {
    margin: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  };
  (() => {
    setTimeout(() => {
      //window.location = "/";
    }, 2000);
  })();

  const onClickHome = () => {
    window.location = "/";
  };

  return (
    <div style={body}>
      <img style={styling} src={global.path.error} />
      <BT.Button
        style={{
          position: "fixed",
          width: "265px",
          height: "60px",
          left: "8%",
          top: "59.5%",
          backgroundColor: "black",
          color: "white",
          borderRadius: "20px",
        }}
        onClick={onClickHome}
      >
        홈으로
      </BT.Button>
    </div>
  );
}

export default NotFound;
