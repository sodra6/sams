import React, { useRef, useState } from "react";
import UserList from "../../../components/sys/sys/UserList";
import RegistUsr from "../../../components/sys/sys/RegistUsr";

function UsrMng(props) {
  const [usrList, setUsrList] = useState([
    {
      usrId: "admin",
      name: "관리자",
      group: "시스템 관리자",
    },
  ]);

  const nextId = useRef(2);

  const [inputs, setInputs] = useState({
    authCd: "",
    usrId: "",
    name: "",
    password: "",
    validPassword: "",
  });

  const { authCd, usrId, name, password, validPassword } = inputs;

  const onRegistChange = e => {
    const { name, value } = e.target;
    //console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onRegistClick = () => {
    const usr = {
      id: nextId,
      authCd,
      usrId,
      name,
      password,
    };
    setUsrList(usrList.concat(usr));

    if (inputs.password !== inputs.validPassword && inputs.password !== "") return alert("비밀번호가 일치하지 않습니다.");
    else if (inputs.usrId === "" || inputs.usrId === undefined) return alert("ID를 입력해주세요");
    else if (inputs.name === "" || inputs.name === undefined) return alert("이름을 입력해 주세요");
    else {
      setInputs({
        authCd: "",
        usrId: "",
        name: "",
        password: "",
        validPassword: "",
      });
      nextId.current += 1;
    }
  };

  return (
    <>
      <div className="row">
        <UserList />
        <RegistUsr authCd={authCd} usrId={usrId} name={name} password={password} validPassword={validPassword} onRegistClick={onRegistClick} onRegistChange={onRegistChange} />
      </div>
    </>
  );
}

export default UsrMng;
