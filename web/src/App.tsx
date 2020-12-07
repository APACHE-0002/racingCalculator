import React from 'react';

import api from '../src/services/api';

import Header from '../src/components/Header';

import './app.css';
import './assets/styles/global.css';

function App() {

  async function calcular() {
    const velocidade = document.getElementById('velocidade') as HTMLInputElement;
    const value = (velocidade.value).replace(/,/g, '.');

    const distancia = document.getElementById('distancia') as HTMLInputElement;
    const value2 = (distancia.value).replace(/,/g, '.');

    let resultado = document.getElementById('resultado') as HTMLInputElement;

    await api.post('/', {
      velocidade: value,
      distancia: value2,
    }).then(res =>{
      const time = res.data.resultado;
      resultado.placeholder = time;
    });
  }
  

  return (
    
    <div className="App">

      <header className="Header">
        <Header/>
      </header>

      <body className="Body">
      <div className="propaganda"></div>

      <div className="centro">

      <h1>Digite e Calcule!</h1>
      <br/>  <br/>

      <div className="input-block">
      <label>Distancia</label>
      <input type="text" id="distancia" placeholder="Digite em km"></input>
      </div>
      <br/> <br/>

      <div className="input-block">
      <label>Velocidade</label>
      <input type="text" id="velocidade" placeholder="Digite em km/h"></input>
      </div>
      <br/> <br/>

      <div className="input-block2">
      <label>Duração</label>
      <input type="input" id="resultado" placeholder="" readOnly></input>
      </div>
      <br/> <br/> 
      
      
      
      <button type="button" className="button" onClick={calcular}>
        Calcular
      </button>

      
      </div>

      <div className="propaganda"></div>
      </body>
      
      <footer className="Footer"></footer>
    
    </div>
  );
}

export default App;
