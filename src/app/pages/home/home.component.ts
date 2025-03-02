import { TreinoFirebaseService } from './../../shared/services/firebase/treino-firebase.service';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Treino } from '../../shared/models/treino.model';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NovoTreinoDialogComponent } from './novo-treino-dialog/novo-treino-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmacaoDialogComponent } from '../../components/confirmacao-dialog/confirmacao-dialog.component';
import { SessionStorageService } from '../../shared/services/session-storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  private _router = inject(Router);

  public treinoVini: Treino[] = [];

  ngOnInit() {
    this.pesquisar();
  }

  async pesquisar() {
    this.treinoVini = await TreinoFirebaseService.buscarTreinos() ?? [];
  }

  criarNovoTreino() {
    const dialogRef = this.dialog.open(NovoTreinoDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      this.pesquisar();
    });
  }

  deletarTreino(idTreino: string, tituloTreino: string) {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      data: {
        msg: `Deseja realmente excluir o treino: ${tituloTreino}?`
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        TreinoFirebaseService.removerTreino(idTreino);
        this.pesquisar();
      }
    });
  }

  editarTreino(idTreino: string)  {
    this._router.navigate(['home/exercicios/' + idTreino]);
    SessionStorageService.inserir('tipoListaExercicios', 'edicao');
  }

  comecarTreino(idTreino: string) {
    this._router.navigate(['home/exercicios/' + idTreino]);2
    SessionStorageService.inserir('tipoListaExercicios', 'treino');
  }
}
