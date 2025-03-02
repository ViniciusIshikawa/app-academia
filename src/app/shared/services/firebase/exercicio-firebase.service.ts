import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, get, ref, child, push, set, update } from 'firebase/database';
import { Exercicio } from '../../models/exercicio.model';

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
export class ExercicioFirebaseService {

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

  static inserirExercicio(idTreino: string, exercicio: Exercicio) {
    const idExercicio = push(ref(dbFireBase, `treinos/${idTreino}`)).key;

    set(ref(dbFireBase, `treinos/${idTreino}/exercicios/${idExercicio}`), {
      nome: exercicio.nome,
      repeticao: exercicio.repeticao,
      serie: exercicio.serie,
      peso: exercicio.peso
    });
  }

  static alerarExercicio(idTreino: string, exercicio: Exercicio) {
    const exercicioAtualizado = {
      nome: exercicio.nome,
      repeticao: exercicio.repeticao,
      serie: exercicio.serie,
      peso: exercicio.peso
    }

    return update(ref(dbFireBase, `treinos/${idTreino}/exercicios/${exercicio.id}`), exercicioAtualizado);
  }

  static removerExercicio(idTreino: string, idExercicio: string) {
    const remove: { [key: string]: any } = {};

    remove[`treinos/${idTreino}/exercicios/${idExercicio}`] = null;

    return update(ref(dbFireBase), remove);
  }
}
