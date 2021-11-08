import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Fichas from './components/Fichas';

function App() {
  const handleBoton = (nuevofiltro) => {
    setFiltro( nuevofiltro );
    <div className="container">

      <Fichas fichas={inventario.filter(item => item.attributes.class === filtro)} />
    </div>
  };


  const [inventario, setInventario] = useState([]);
  const [filtro, setFiltro] = useState('poster');


  const url = "https://galaxy.staratlas.com/nfts";

  const fetchInventory = (url) => {
    fetch(url)
      .then(Response => Response.json())
      .then(data => setInventario(data))
      .catch(error => console.log(error))


  };

  useEffect(() => {
    fetchInventory(url);
  }, [])


  return (
    <>
      <Navbar brand="INVENTARIO DE STAR ATLAS" />
      <div className="container">
        <button className="btn btn-outline-info" type="button" onClick={() => handleBoton("x-small")} >NAVES XS</button>
        <button className="btn" type="button" onClick={() => handleBoton("small")} >NAVES S</button>
        <button className="btn" type="button" onClick={() => handleBoton("medium")} >NAVES M</button>
        <button className="btn" type="button" onClick={() => handleBoton("large")} >NAVES L</button>
        <button className="btn" type="button" onClick={() => handleBoton("capital")} >NAVES XL</button>
        <button className="btn" type="button" onClick={() => handleBoton("human")} >TRIPULACION</button>
        <button className="btn" type="button" onClick={() => handleBoton("crew gear")} >EQUIPAMINETO</button>
        <button className="btn" type="button" onClick={() => handleBoton("emote")} >EMOTES</button>
        <button className="btn" type="button" onClick={() => handleBoton("mining equipment")} >ESTRUCTURAS</button>
        <button className="btn" type="button" onClick={() => handleBoton("skin")} >SKINS</button>
        <button className="btn" type="button" onClick={() => handleBoton("license")} >LICENCIAS</button>
        <button className="btn" type="button" onClick={() => handleBoton("badge")} >ACCESO</button>
        <button className="btn" type="button" onClick={() => handleBoton("poster")} >POSTERS</button>
      </div>
      <div className="container">

        <Fichas fichas={inventario.filter(item => item.attributes.class === filtro)} />
      </div>

    </>
  );

}

export default App;
