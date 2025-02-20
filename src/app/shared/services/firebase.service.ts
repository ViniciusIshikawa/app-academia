import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, child, push, update, remove } from "firebase/database";

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

  static inserir(valor: any) {
    set(ref(dbFireBase, 'Treino_A'), {
      'Supino reto': {
        'peso': '32kg',
        'Reps': '10',
        'Series': '3'
      }
    });
  }

  static consultar() {
    const treino = ref(dbFireBase, 'Treino_A');
    onValue(treino, (res) => {
      const data = res.val();
      console.log(data);
    });
  }

  static atualizar(objetoAlvo: any, novoValor: any): any{
    const updates: { [key: string]: any } = {};

    updates[objetoAlvo] = novoValor;

    return update(ref(dbFireBase), updates);
  }

  static remover(objetoAlvo: any) {
    const remove: { [key: string]: any } = {};

    remove[objetoAlvo] = null;

    return update(ref(dbFireBase), remove);
  }
}
