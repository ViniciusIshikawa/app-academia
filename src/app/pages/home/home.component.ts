import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Treino } from '../../shared/models/treino.model';
import { SessionStorageService } from '../../shared/services/session-storage.service';
import { Router } from '@angular/router';

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
      titulo: 'B: Costas e Bíceps',
      tipo: 'B',
      exercicios: []
    },
    {
      titulo: 'C: Pernas',
      tipo: 'C',
      exercicios: []
    },
    {
      titulo: 'D: Ombros e Abdômen',
      tipo: 'D',
      exercicios: []
    },
  ];

  selecionarTreino(tipoTreino: string) {
    SessionStorageService.inserir('treino', tipoTreino);
    this._router.navigate(['home/exercicios']);
  }
}
