import { Exercicio } from "./exercicio.model";

export interface Treino {
  id: string;
  titulo: string;
  exercicios: Exercicio[];
}
