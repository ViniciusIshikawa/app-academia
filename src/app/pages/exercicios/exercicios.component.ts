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
import { WorkoutsService } from '../../shared/services/workouts.service';
import { Treino } from '../../shared/models/treino.model';

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
export class ExerciciosComponent implements OnInit {
  private _router = inject(Router);
  readonly dialog = inject(MatDialog);
  private _activatedRoute = inject(ActivatedRoute);
  private _workoutsService = inject(WorkoutsService);

  public idTreino: string;
  public treinoSelecionado: Treino;
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

  async pesquisar() {
    this._activatedRoute.paramMap.subscribe( params => {
      this.idTreino = params.get('idTreino');
    });

    this.treinoSelecionado = await this._workoutsService.getWorkoutByID(this.idTreino);
  }

  voltar() {
    this._router.navigate(['home']);
  }
}
