import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  
  .text{
      font-weight: bold;
  }
`;

export default ({ item }) => {
    return (
        <Item>
            <span>{item.type}</span>
            <span>{item.from}</span>
            <span className='text'>{item.value}</span>
        </Item>
    );
}