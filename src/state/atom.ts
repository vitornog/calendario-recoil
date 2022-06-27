import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom({
    key: 'listaDeEventosState',
    default: [{
        "id": 12,
        "descricao": "Estudar React",
        "inicio": new Date("2022-01-15T09:00"),
        "fim": new Date("2022-01-15T13:00"),
        "completo": false
    },
    {
        "id": 13,
        "descricao": "Estudar Recoil",
        "inicio": new Date("2022-01-16T09:00"),
        "fim": new Date("2022-01-16T11:00"),
        "completo": false
    }]
});

export const FiltroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})