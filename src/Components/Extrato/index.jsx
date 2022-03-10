import React from "react";
import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map((item) => (
        <Items key={item.id} item={item}></Items>
      ))}
      <Botao>Ver mais</Botao>
    </Box>
  );
};

export default Extrato;
