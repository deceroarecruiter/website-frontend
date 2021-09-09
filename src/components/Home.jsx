import React from "react";
import "../App.css";
import logo from "../images/Logo1.svg";
import logo3d from "../images/Logo3D.png";
import circulo from "../images/Circulo.svg";

const Home = () => {
  return (
    <div className="content-web">
      <section className="logotipo-container">
        <img src={logo} alt="logo" className="logoL" />
      </section>

     <div className="prueba">
      <section className="progreso">
        <img src={circulo} alt="logo" className="circulo" />
        <h1 className="texto1">
          EN <span>PROGRESO</span>
        </h1>
      </section>

      <section className="logotipo3d-container">
        <img src={logo3d} alt="logo2" className="logo3D" />
      </section>
      </div>
    </div>
  );
};

export default Home;
