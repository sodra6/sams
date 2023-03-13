import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ sideList = [], handlerSideClick }) => {
  return (
    <>
      <aside className="left-sidebar">
        <SbContainer>
          {sideList.length > 0 && (
            <>
              {sideList.map((side, i) => (
                <SidebarItem side={side} key={i} handlerSideClick={handlerSideClick} />
              ))}
            </>
          )}
        </SbContainer>
      </aside>
    </>
  );
};

export default Sidebar;

// 사이드바 전체를 감싸는 div
const SbContainer = styled.div`
  min-width: 16rem;
  width: auto;
  height: auto;
  min-height: 70vh;
  font-size: 14px;
`;
