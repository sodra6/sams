//react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

//page
import Header from "./Header";
import Sidebar from "./Sidebar";

//api
import { menuApi } from "../../../js/apis/sys/MenuApi";
import { commonUtil, menuUtil } from "../../../js/util/commonUtil";

const HeaderNLnb = ({ headerType }) => {
  const navigate = useNavigate();

  const [init, setInit] = useState(true); //최초 mount
  const [menu, setMenu] = useState([]); //메뉴 전체 목록
  const [topList, setTopList] = useState([]); //헤더바 메뉴 : 2depth
  const [side2List, setSide2List] = useState([]); //사이드바 메뉴 참고용 : 2depth~
  const [side3List, setSide3List] = useState([]); //사이드바 메뉴 : 3depth~
  const [type, setType] = useState(headerType); //메뉴 타입

  const handler1DepthClick = (type, url) => {
    setType(type);
    if (url && url !== "") navigate(url);
  };

  const handler2depthClick = (e, menu) => {
    if (commonUtil.hasClass(e, "active")) return;

    const mnuCd = menu.mnuCd;
    const mnuUrl = menuUtil.getFirstLowestUrl(menu);
    const sides = menuUtil.getSideDetailMenu(side2List, mnuCd);
    setSide3List(sides);
    if (mnuUrl && mnuUrl !== "") navigate(mnuUrl);
  };

  const handlerSideClick = (e, menu) => {
    if (commonUtil.hasClass(e, "active")) return;
  };

  const getMenu = async () => {
    //console.log("getMenu type", type);

    const { data = [] } = await menuApi.getMenuList({});
    //console.log("getMenu data", data);

    setInit(false);
    setMenu(data);
  };

  const getTopNSide = async () => {
    //console.log("getTopNSide", init);
    if (init) return;

    //console.log("getTopNSide menu", type, menu);

    const tops = menuUtil.getTopMenu(menu, type);
    //console.log("getTopNSide tops", tops);

    const sides2 = menuUtil.getSideMenu(menu, type);
    const sides3 = menuUtil.getSideDetailMenu(sides2);

    setTopList(tops);
    setSide2List(sides2);
    setSide3List(sides3);
  };

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    getTopNSide();
  }, [type, menu]);

  return (
    <>
      <Header type={type} topList={topList} handler1DepthClick={handler1DepthClick} handler2depthClick={handler2depthClick} />
      <Sidebar sideList={side3List} handlerSideClick={handlerSideClick} />
    </>
  );
};

export default HeaderNLnb;
