import React from "react";
import "../App.css";
import logo from "../images/Logo1.svg";
import logo3d from "../images/Logo3D.png";
import circulo from "../images/Circulo.svg";

const Hero = () => {
  return (
    <div className="overlay">
      <section class="logotipo-container">
        <img src={logo} alt="logo" class="logoL" />
      </section>

     <div className="prueba">
      <section className="progreso">
        <img src={circulo} alt="logo" className="circulo" />
        <h1 class="texto1">
          EN <span>PROGRESO</span>
        </h1>
      </section>

      <section className="logotipo3d">
        <img src={logo3d} alt="logo" className="logo3D" />
      </section>
      </div>
    </div>
  );
};

export default Hero;
