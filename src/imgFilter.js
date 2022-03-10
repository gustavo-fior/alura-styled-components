import React from 'react';
import alimentacao from "./assets/images/alimentacao.svg";
import outros from "./assets/images/outros.svg";
import saude from "./assets/images/saude.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icone, IconeTema } from './Components/UI';

export default (tipo) => {
    const images = {
        Restaurante: <IconeTema src={alimentacao} alt="Alimentacao" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
        Saude: <IconeTema src={saude} alt="Saude" />,
        default: <IconeTema src={outros} alt="Outros" />,
    };

    return images[tipo] || images.default;
}