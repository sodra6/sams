import React from "react";
import { useNavigate } from "react-router-dom";

import { global, bootstrap as BT } from "../../../js/util/commonUtil";

function Maintenance(props) {
  const nav = useNavigate();

  const onClickHome = () => {
    nav("/");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img style={{ width: "100%" }} src={global.path.maintenance} />
        <BT.Button
          style={{
            width: "265px",
            height: "60px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
          }}
          onClick={onClickHome}
        >
          홈으로
        </BT.Button>
      </div>
    </div>
  );
}

export default Maintenance;
