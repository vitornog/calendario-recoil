import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsyns } from "./seletores";

export const listaDeEventosState = atom({
    key: 'listaDeEventosState',
    default: eventosAsyns
});

export const FiltroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})