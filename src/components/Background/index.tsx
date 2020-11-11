import React from 'react';

import { Container,Botao } from './styles';
import  btn  from '../../assets/botao.png';


const Background: React.FC = () => {
  return (
    <>
    
    <Container>
      <h1>DASH & LILY</h1>
      <h3>Assita à temporada 1 agora</h3>
      <p>Era pra ser um jogo entre adolescentes, mas eles acabaram se apaixonando.No papel, tudo é perfeito e na vida real?</p>
      <Botao src={btn}/>
     
    </Container>
    </>
  );
};

export default Background;
