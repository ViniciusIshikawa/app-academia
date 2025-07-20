import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Exercicio } from '../../../shared/models/exercicio.model';
import { DialogData } from '../exercicios.component';

@Component({
  selector: 'app-novo-exercicio-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule
  ],
  templateUrl: './novo-exercicio-dialog.component.html',
  styleUrl: './novo-exercicio-dialog.component.scss'
})
export class NovoExercicioDialogComponent implements OnInit {
  public _formBuilder = inject(FormBuilder);
  public titulo: string;

  readonly dialogRef = inject(MatDialogRef<NovoExercicioDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  public formExercicio = this._formBuilder.group({
    nome: ['', Validators.required],
    peso: ['', Validators.required],
    series: ['', Validators.required],
    repeticoes: ['', Validators.required]
  });

  ngOnInit(): void {
    if(this.data.tipo === 'adicao') {
      this.titulo = 'Cadastrar Novo Exercício';
    } else if(this.data.tipo === 'edicao') {
      this.titulo = 'Alterar Exercício';
      this.formExercicio.setValue({
        nome: this.data.exercicio.nome,
        peso: this.data.exercicio.peso,
        series: this.data.exercicio.serie,
        repeticoes: this.data.exercicio.repeticao
      });
    }
  }

  adicionarExercicio() {
    const exercicio: Exercicio = {
      nome: this.formExercicio.get('nome').value,
      repeticao: this.formExercicio.get('repeticoes').value,
      serie: this.formExercicio.get('series').value,
      peso: this.formExercicio.get('peso').value,
    }

    this.dialogRef.close();
  }

  alterarExercicio() {
    const exercicioAlterado: Exercicio = {
      id: this.data.exercicio.id,
      nome: this.formExercicio.get('nome').value,
      repeticao: this.formExercicio.get('repeticoes').value,
      serie: this.formExercicio.get('series').value,
      peso: this.formExercicio.get('peso').value,
    }

    this.dialogRef.close();
  }
}
