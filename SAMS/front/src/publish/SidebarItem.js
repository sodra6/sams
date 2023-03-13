import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const SidebarItem = ({ item, depth = 0 }) => {
  const [collapsed, setCollapsed] = useState(false);
  const icon = collapsed ? <HiChevronUp /> : <HiChevronDown />;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  return (
    <>
      {item.children.length > 0 ? (
        <div>
          <SbTitle depth={depth} onClick={toggleCollapse}>
            {item.mnuNm}
            {icon}
          </SbTitle>
          <SbSub isOpen={collapsed}>
            {item.children.map((child, i) => (
              <SidebarItem item={child} depth={depth + 1} key={i} />
            ))}
          </SbSub>
        </div>
      ) : (
        <SbTitle depth={depth}>
          <SbLink to={item.pgmUrl}>{item.mnuNm}</SbLink>
        </SbTitle>
      )}
    </>
  );
};

export default SidebarItem;

// SbItem에서 하위메뉴들을 묶어줄 div
export const SbSub = styled.div`
  overflow: hidden;
  max-height: ${props => (props.isOpen ? "100%" : "0")};
`;

// 메뉴명을 보여줄 div
export const SbTitle = styled.div`
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
export const SbLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;
