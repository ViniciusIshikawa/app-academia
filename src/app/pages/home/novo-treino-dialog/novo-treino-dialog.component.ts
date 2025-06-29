import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-novo-treino-dialog',
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
  templateUrl: './novo-treino-dialog.component.html',
  styleUrl: './novo-treino-dialog.component.scss'
})
export class NovoTreinoDialogComponent {
  public _formBuilder = inject(FormBuilder);
  readonly dialogRef = inject(MatDialogRef<NovoTreinoDialogComponent>);

  public formTreino = this._formBuilder.group({
    titulo: [null, Validators.required]
  });
}
