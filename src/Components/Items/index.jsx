import React from "react";
import styled from "styled-components";
import imgFIlter from "../../imgFilter";
import Item from "../Item";

const Items = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default ({ item }) => {
  return <Items>
    {imgFIlter(item.type)}
    <Item item={item}/>
    <span>{item.date}</span>
  </Items>;
};
