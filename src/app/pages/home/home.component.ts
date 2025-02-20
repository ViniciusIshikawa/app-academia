import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Treino } from '../../shared/models/treino.model';
import { SessionStorageService } from '../../shared/services/session-storage.service';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyAK5jWxCHrjwZ2fei3eGny2ILzRdhnasKc",
//   authDomain: "banco-app-academia.firebaseapp.com",
//   databaseURL: "https://banco-app-academia-default-rtdb.firebaseio.com",
//   projectId: "banco-app-academia",
//   storageBucket: "banco-app-academia.firebasestorage.app",
//   messagingSenderId: "749182666411",
//   appId: "1:749182666411:web:95ed9568ae75eed26459ee"
// };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  private _router = inject(Router);

  public treinoVini: Treino[] = [
    {
      titulo: 'A: Peito e Tríceps',
      tipo: 'A',
      exercicios: []
    },
    {
      titulo: 'B: Quadríceps',
      tipo: 'B',
      exercicios: []
    },
    {
      titulo: 'C: Costas e Bíceps',
      tipo: 'C',
      exercicios: []
    },
    {
      titulo: 'D: Posterior e Glúteo',
      tipo: 'D',
      exercicios: []
    },
    {
      titulo: 'E: Ombros e Abdômen',
      tipo: 'E',
      exercicios: []
    },
  ];

  selecionarTreino(tipoTreino: string) {
    SessionStorageService.inserir('treino', tipoTreino);
    this._router.navigate(['home/exercicios']);
  }
}
