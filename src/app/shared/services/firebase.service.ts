import { Treino } from './../models/treino.model';
import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, child, push, update, remove, get } from "firebase/database";
import { Exercicio } from '../models/exercicio.model';

const firebaseConfig = {
  apiKey: "AIzaSyAK5jWxCHrjwZ2fei3eGny2ILzRdhnasKc",
  authDomain: "banco-app-academia.firebaseapp.com",
  databaseURL: "https://banco-app-academia-default-rtdb.firebaseio.com",
  projectId: "banco-app-academia",
  storageBucket: "banco-app-academia.firebasestorage.app",
  messagingSenderId: "749182666411",
  appId: "1:749182666411:web:95ed9568ae75eed26459ee"
};

const firebase = initializeApp(firebaseConfig);
const dbFireBase = getDatabase();

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  static inserirTreino(treino: string) {
    const idTreino = push(ref(dbFireBase, 'treinos')).key;

    set(ref(dbFireBase, 'treinos/' + idTreino), {
      titulo: treino,
      exercicios: {}
    });
  }

  static async buscarTreinos(): Promise<Treino[]> {
    const dbRef = ref(getDatabase());

    const snapshot = await get(child(dbRef, 'treinos'));

    if(!snapshot.val()) {
      return null;
    }

    const treinos = Object.entries(snapshot.val()).map(([id, treino]) =>
      typeof treino === 'object' && treino !== null ? { id, ...treino } : { id }
    );

    return treinos as Treino[];
  }

  static async buscarExercicios(idTreino: string): Promise<Exercicio[]> {
    const dbRef = ref(getDatabase());

    const snapshot = await get(child(dbRef, 'treinos/' + idTreino + '/exercicios'));

    if(!snapshot.val()) {
      return null;
    }

    const exercicios = Object.entries(snapshot.val()).map(([id, exercicio]) =>
      typeof exercicio === 'object' && exercicio !== null ? { id,  ...exercicio } : { id }
    );

    return exercicios as Exercicio[];
  }


  static atualizar(objetoAlvo: any, novoValor: any): any{
    const updates: { [key: string]: any } = {};

    updates[objetoAlvo] = novoValor;

    return update(ref(dbFireBase), updates);
  }

  static removerTreino(idTreino: string) {
    const remove: { [key: string]: any } = {};

    remove['treinos/' + idTreino] = null;

    return update(ref(dbFireBase), remove);
  }

  static inserirExercicio(idTreino: string, exercicio: Exercicio) {
    const idExercicio = push(ref(dbFireBase, `treinos/${idTreino}`)).key;

    set(ref(dbFireBase, `treinos/${idTreino}/exercicios/${idExercicio}`), {
      nome: exercicio.nome,
      repeticao: exercicio.repeticao,
      serie: exercicio.serie,
      peso: exercicio.peso
    });
  }
}
