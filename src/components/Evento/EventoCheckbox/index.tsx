import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../../interfaces/IEvento';
import { listaDeEventosState } from '../../../state/atom';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  const atualizaEvento = useAtualizarEvento();

  const alterarStatus = () => {
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !evento.completo

    atualizaEvento(eventoAlterado)

  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox