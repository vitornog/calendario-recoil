import { selector } from "recoil";
import { FiltroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(FiltroDeEventos)
        const todosOsEventos = get(listaDeEventosState)

        const eventos = todosOsEventos.filter(evento=>{ 
            if(!filtro.data){
              return true
            }
            
            const ehOMesmoDia = filtro.data.toISOString().slice(0,10) === evento.inicio.toISOString().slice(0,10)
            
            return ehOMesmoDia
          
          })
          
          return eventos
    }
})