import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const SidebarItem = ({ side, depth = 0, handlerSideClick }) => {
  const [collapsed, setCollapsed] = useState(false);
  const icon = collapsed ? <HiChevronUp /> : <HiChevronDown />;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  return (
    <>
      {side.children && side.children.length > 0 ? (
        <div>
          <SbTitle depth={depth} onClick={toggleCollapse}>
            {side.mnuNm}
            {icon}
          </SbTitle>
          <SbSub isOpen={collapsed}>
            {side.children.map((child, i) => (
              <SidebarItem side={child} depth={depth + 1} key={i} />
            ))}
          </SbSub>
        </div>
      ) : (
        <SbTitle depth={depth}>
          {side.mnuUrl && <SbLink to={side.mnuUrl}>{side.mnuNm}</SbLink>}
          {side.mnuUrl === undefined && <SbNoLink>{side.mnuNm}</SbNoLink>}
        </SbTitle>
      )}
    </>
  );
};

export default SidebarItem;

// SbItem에서 하위메뉴들을 묶어줄 div
const SbSub = styled.div`
  overflow: hidden;
  max-height: ${props => (props.isOpen ? "100%" : "0")};
`;

// 메뉴명을 보여줄 div
const SbTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${props => props.depth * 20}px;
  height: 32px;
  &:hover {
    background-color: #f6f6f2;
    cursor: pointer;
    border-right: solid 5px;
  }
`;

// 제일 하위메뉴에서 클릭할 Link
const SbLink = styled(Link)`
  width: 100%;
  color: inherit;
  text-decoration: inherit;
`;

// 제일 하위메뉴에서 클릭할 Link
const SbNoLink = styled.a`
  width: 100%;
  color: inherit;
  text-decoration: inherit;
`;
