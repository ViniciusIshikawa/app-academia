import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Exercicio } from '../../shared/models/exercicio.model';
import { SessionStorageService } from '../../shared/services/session-storage.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NovoExercicioDialogComponent } from './novo-exercicio-dialog/novo-exercicio-dialog.component';
import { ConfirmacaoDialogComponent } from '../../components/confirmacao-dialog/confirmacao-dialog.component';
import { ExercicioFirebaseService } from '../../shared/services/firebase/exercicio-firebase.service';

export interface DialogData {
  tipo: string,
  idTreino: string,
  exercicio: Exercicio
}

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [
    NavbarComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.scss'
})
export class ExerciciosComponent implements OnInit{
  private _router = inject(Router);
  readonly dialog = inject(MatDialog);
  private _activatedRoute = inject(ActivatedRoute);

  public idTreino: string;
  public exerciciosTreino: Exercicio[];
  public titulo: string;
  public isOverlayVisible: boolean = false;
  public btnNovoTreino: boolean;
  public tipoListagem: string;

  async ngOnInit() {
    this.tipoListagem = SessionStorageService.buscar('tipoListaExercicios');
    this.titulo = SessionStorageService.buscar('tituloTreino');

    if(this.tipoListagem === 'edicao') {
      this.btnNovoTreino = true;
    } else if(this.tipoListagem === 'treino') {
      this.btnNovoTreino = false;
    }

    this.pesquisar();
  }

  toggleOverlay(): void {
    if(this.tipoListagem === 'treino') {
      this.isOverlayVisible = !this.isOverlayVisible;
    }
  }

  async pesquisar() {
    this._activatedRoute.paramMap.subscribe( params => {
      this.idTreino = params.get('idTreino');
    });

    this.exerciciosTreino = await ExercicioFirebaseService.buscarExercicios(this.idTreino) as Exercicio[];
  }

  voltar() {
    this._router.navigate(['home']);
  }

  criarNovoExercicio() {
    const dialogRef = this.dialog.open(NovoExercicioDialogComponent, {
      data: {
        tipo: this.tipoListagem,
        idTreino: this.idTreino
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pesquisar();
    });
  }

  editarExercicio(exercicio: Exercicio) {
    const dialogRef = this.dialog.open(NovoExercicioDialogComponent, {
      data: {
        tipo: this.tipoListagem,
        idTreino: this.idTreino,
        exercicio: exercicio
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pesquisar();
    });
  }

  excluirExercicio(exercicio: Exercicio) {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      data: {
        msg: `Deseja realmente excluir o exercício: ${exercicio.nome}?`
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        ExercicioFirebaseService.removerExercicio(this.idTreino, exercicio.id);
        this.pesquisar();
      }
    });
  }
}
