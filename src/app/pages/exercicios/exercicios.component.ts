import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Exercicio } from '../../shared/models/exercicio.model';
import { SessionStorageService } from '../../shared/services/session-storage.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

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

  titulo: string = '';
  exerciciosTreino: Exercicio[] = [];

  exerciciosTreinoA: Exercicio[] = [
    {
      nome: 'Supino reto com barra',
      repeticao: '8 - 12',
      serie: 4,
      peso: 0
    },
    {
      nome: 'Supino inclinado com halteres',
      repeticao: '8 - 12',
      serie: 4,
      peso: 0
    },
    {
      nome: 'Crossover (ou crucifixo na polia)',
      repeticao: '12 - 15',
      serie: 3,
      peso: 0
    },
    {
      nome: 'Paralelas (ou supino fechado)',
      repeticao: '10 - 12',
      serie: 3,
      peso: 0
    },
    {
      nome: 'Tríceps testa com barra EZ',
      repeticao: '10 - 12',
      serie: 3,
      peso: 0
    },
    {
      nome: 'Tríceps na polia (barra reta ou corda)',
      repeticao: '12 - 15',
      serie: 3,
      peso: 0
    }
  ];

  exerciciosTreinoB: Exercicio[] = [
    {
      nome: 'Barra fixa (assistida se necessário',
      repeticao: '6 - 10',
      serie: 4,
      peso: 0
    },
    {
      nome: "Remada curvada com barra",
      repeticao: "8 - 12",
      serie: 4,
      peso: 0
    },
    {
      nome: "Puxador frente com pegada aberta",
      repeticao: "10 - 12",
      serie: 3,
      peso: 0
    },
    {
      nome: "Remada unilateral com haltere",
      repeticao: "8 - 12",
      serie: 3,
      peso: 0
    },
    {
      nome: "Rosca direta com barra EZ",
      repeticao: "10 - 12",
      serie: 3,
      peso: 0
    },
    {
      nome: "Rosca alternada com halteres",
      repeticao: "10 - 12",
      serie: 3,
      peso: 0
    }
  ]

  exerciciosTreinoC: Exercicio[] = [
    {
      nome: "Agachamento livre",
      repeticao: "8 - 12",
      serie: 4,
      peso: 0
    },
    {
      nome: "Leg press 45º",
      repeticao: "10 - 12",
      serie: 4,
      peso: 0
    },
    {
      nome: "Cadeira extensora",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0
    },
    {
      nome: "Stiff com barra ou halteres",
      repeticao: "10 - 12",
      serie: 4,
      peso: 0
    },
    {
      nome: "Mesa flexora",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0
    },
    {
      nome: "Panturrilha no leg press ou em pé",
      repeticao: "15 - 20",
      serie: 4,
      peso: 0
    }
  ]

  exerciciosTreinoD: Exercicio[] = [
    {
      nome: "Desenvolvimento com barra ou halteres",
      repeticao: "8 - 12",
      serie: 4,
      peso: 0
    },
    {
      nome: "Elevação lateral com halteres",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0
    },
    {
      nome: "Elevação frontal com halteres ou barra",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0
    },
    {
      nome: "Encolhimento com barra para trapézio",
      repeticao: "10 - 12",
      serie: 3,
      peso: 0
    },
    {
      nome: "Elevação posterior com halteres",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0
    },
    {
      nome: "Abdômen: prancha isométrica",
      repeticao: "30 - 60 segundos",
      serie: 3,
      peso: 0
    },
    {
      nome: "Abdominal infra ou canivete no banco",
      repeticao: "15 - 20",
      serie: 3,
      peso: 0
    }
  ]

  ngOnInit(): void {
    const tipoTreino = SessionStorageService.buscar('treino');

    switch (tipoTreino) {
      case 'A':
        this.exerciciosTreino = this.exerciciosTreinoA;
        this.titulo = 'Treino A: Peito e Tríceps'
        break;
      case 'B':
        this.exerciciosTreino = this.exerciciosTreinoB;
        this.titulo = 'Treino B: Costas e Bíceps';
        break;
      case 'C':
        this.exerciciosTreino = this.exerciciosTreinoC;
        this.titulo = 'Treino C: Pernas';
        break;
      case 'D':
        this.exerciciosTreino = this.exerciciosTreinoD;
        this.titulo = 'Treino D: Ombros e Abdômen';
        break;
      default:
        this.exerciciosTreino = [];
        break;
    }

  }

  voltar() {
    this._router.navigate(['home']);
  }
}
