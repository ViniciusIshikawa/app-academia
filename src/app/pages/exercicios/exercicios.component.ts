import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Exercicio } from '../../shared/models/exercicio.model';
import { SessionStorageService } from '../../shared/services/session-storage.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CardExercicioComponent } from '../../components/card-exercicio/card-exercicio.component';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../shared/services/firebase.service';
import { Treino } from '../../shared/models/treino.model';
import { MatDialog } from '@angular/material/dialog';
import { NovoExercicioDialogComponent } from './novo-exercicio-dialog/novo-exercicio-dialog.component';

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [
    NavbarComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CardExercicioComponent
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

  public btnNovoTreino: boolean;

  async ngOnInit() {
    const tipoListagem = SessionStorageService.buscar('tipoListaExercicios');
    this.titulo = SessionStorageService.buscar('tituloTreino');

    if(tipoListagem === 'edicao') {
      this.btnNovoTreino = true;
    } else if(tipoListagem === 'treino') {
      this.btnNovoTreino = false;
    }

    this.pesquisar();
  }

  async pesquisar() {
    this._activatedRoute.paramMap.subscribe( params => {
      this.idTreino = params.get('idTreino');
    });

    this.exerciciosTreino = await FirebaseService.buscarExercicios(this.idTreino) as Exercicio[];
  }

  voltar() {
    this._router.navigate(['home']);
  }

  criarNovoExercicio() {
    const dialogRef = this.dialog.open(NovoExercicioDialogComponent, {
      data: this.idTreino
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pesquisar();
    });
  }
}
