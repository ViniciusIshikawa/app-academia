import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Exercicio } from '../../shared/models/exercicio.model';

@Component({
  selector: 'card-exercicio',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './card-exercicio.component.html',
  styleUrl: './card-exercicio.component.scss'
})
export class CardExercicioComponent {
  @Input() exercicio!: Exercicio;
}
