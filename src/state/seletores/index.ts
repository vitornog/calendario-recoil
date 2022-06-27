import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
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

export const eventosAsyns = selector({
    key: 'eventosAsync',
    get: async () =>{
        const respostaHttp = await fetch("http://localhost:3001/eventos")
        const eventosJson: IEvento[] = await respostaHttp.json()
        return eventosJson.map(evento=>({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }))
    }
})