import { Exercicio } from "./exercicio.model";

export interface Treino {
  titulo: string;
  tipo: string;
  exercicios: Exercicio[];
}
