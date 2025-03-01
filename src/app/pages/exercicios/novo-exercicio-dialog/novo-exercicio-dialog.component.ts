import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Exercicio } from '../../../shared/models/exercicio.model';

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
export class NovoExercicioDialogComponent {
  public _formBuilder = inject(FormBuilder);
  readonly dialogRef = inject(MatDialogRef<NovoExercicioDialogComponent>);
  readonly idTreino = inject<string>(MAT_DIALOG_DATA);

  public formExercicio = this._formBuilder.group({
    nome: [null, Validators.required],
    peso: [null, Validators.required],
    series: [null, Validators.required],
    repeticoes: [null, Validators.required]
  });

  adicionarExercicio() {
    const exercicio: Exercicio = {
      nome: this.formExercicio.get('nome').value,
      repeticao: this.formExercicio.get('repeticoes').value,
      serie: this.formExercicio.get('series').value,
      peso: this.formExercicio.get('peso').value,
    }

    FirebaseService.inserirExercicio(this.idTreino, exercicio);
    this.dialogRef.close();
  }
}
