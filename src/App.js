import React, { useState } from "react";

// Import do styled components para manejo de temas
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

// Import do reset de CSS que foi feito com global style
import { GlobalStyle } from "./Components/GlobalStyle/globalStyle";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { BtnTema } from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema(tema => !tema);
  };

  return (
    <>
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BtnTema onClick={toggleTema}>
          <ThemeSwitcher tema={tema}/>
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
