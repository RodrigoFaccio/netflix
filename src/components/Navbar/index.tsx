import React from 'react';
import Logonet from '../../assets/netflix.png';
import Search from "../../assets/search.png";
import Bell from "../../assets/bell.png";
import Perfil from "../../assets/perfil-netflix.png";



import { Menu,Imagem } from './styles';
import '../../styles.css';
const Navbar: React.FC = () => {
  return (

    <>
    <Imagem src={Logonet}/>

      <Menu>
        <ul>
          <li>Inicio</li>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Bombando</li>
          <li>Minha lista</li>
          <a> </a>


          <li><img src={Search} alt=""/></li>
          <li>INFANTIL</li>
          <li><img src={Bell} alt=""/></li>
          <li><img src={Perfil} alt=""/></li>


        </ul>
      </Menu>
     
    </>

   
  );
};

export default Navbar;
