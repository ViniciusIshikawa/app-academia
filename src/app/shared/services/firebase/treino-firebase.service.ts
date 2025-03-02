import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, get, push, ref, set, child, update } from 'firebase/database';
import { Treino } from '../../models/treino.model';

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
export class TreinoFirebaseService {

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

  static removerTreino(idTreino: string) {
    const remove: { [key: string]: any } = {};

    remove['treinos/' + idTreino] = null;

    return update(ref(dbFireBase), remove);
  }

}
