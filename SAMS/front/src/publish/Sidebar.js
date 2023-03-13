import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ items }) => {
  console.log("items", items);

  return (
    <SbContainer>
      {items.map((subItem, index) => (
        <SidebarItem item={subItem} key={index} />
      ))}
    </SbContainer>
  );
};

export default Sidebar;

// 사이드바 전체를 감싸는 div
export const SbContainer = styled.div`
  min-width: 16rem;
  width: auto;
  height: auto;
  min-height: 70vh;
  font-size: 14px;
`;
