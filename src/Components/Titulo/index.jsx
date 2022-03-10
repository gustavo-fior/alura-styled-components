//import React from "react";
import styled from "styled-components";

// Aqui usamos template literals para colocar uma string para nosso componente h1
const Titulo = styled.h1`
  color: ${({theme}) => theme.text};
  padding: 25px 0;
`;

// Agora estamos utilizando apenas um componente estlizado, nem o React esta sendo importado mais
// o Styled Components entende ate que o texto sera passado via children (dentro do HTML)
// e gera uma classe de nome unico para esse Titulo

// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };
export default Titulo;
