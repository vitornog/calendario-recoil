import React, { Suspense, useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import { IEvento } from './interfaces/IEvento';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback="Carregando calendário...">
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Formulario />
          </Card>
          <hr />
          <Card>
            <ListaDeEventos />
          </Card>
        </div>
        <div className={style.Coluna}>
          <Calendario />
        </div>
      </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
