import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Exercicio } from '../../shared/models/exercicio.model';
import { SessionStorageService } from '../../shared/services/session-storage.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CardExercicioComponent } from '../../components/card-exercicio/card-exercicio.component';

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

  titulo: string = '';
  exerciciosTreino: Exercicio[] = [];

  exerciciosTreinoA: Exercicio[] = [
    {
      nome: 'Supino reto com barra',
      repeticao: '8 - 12',
      serie: 4,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoA/supino-reto-barra.png'
    },
    {
      nome: 'Supino inclinado com halteres',
      repeticao: '8 - 12',
      serie: 4,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoA/supino-inclinado-com-halteres.png'
    },
    {
      nome: 'Crossover (ou crucifixo na polia)',
      repeticao: '12 - 15',
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoA/crucifixo-crossover-alto.png'
    },
    {
      nome: 'Paralelas (ou supino fechado)',
      repeticao: '10 - 12',
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoA/supino-fechado.png'
    },
    {
      nome: 'Tríceps testa com barra EZ',
      repeticao: '10 - 12',
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoA/triceps-testa-barraW.png'
    },
    {
      nome: 'Tríceps na polia (barra reta ou corda)',
      repeticao: '12 - 15',
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoA/triceps-polia.png'
    }
  ];

  exerciciosTreinoB: Exercicio[] = [
    {
      nome: 'Barra fixa',
      repeticao: '6 - 10',
      serie: 4,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoB/barra-fixa.png'
    },
    {
      nome: "Remada curvada com barra",
      repeticao: "8 - 12",
      serie: 4,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoB/remada-curvada-barra.png'
    },
    {
      nome: "Puxador frente com pegada aberta",
      repeticao: "10 - 12",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoB/puxador-aberto-frente.png'
    },
    {
      nome: "Remada unilateral com haltere",
      repeticao: "8 - 12",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoB/remada-unilateral-halter.png'
    },
    {
      nome: "Rosca direta com barra EZ",
      repeticao: "10 - 12",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoB/rosca-barraW.png'
    },
    {
      nome: "Rosca alternada com halteres",
      repeticao: "10 - 12",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoB/rosca-alternada-halter.png'
    }
  ]

  exerciciosTreinoC: Exercicio[] = [
    {
      nome: "Agachamento livre",
      repeticao: "8 - 12",
      serie: 4,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoC/agachamento-livre.png'
    },
    {
      nome: "Leg press 45º",
      repeticao: "10 - 12",
      serie: 4,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoC/leg-45.png'
    },
    {
      nome: "Cadeira extensora",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoC/cadeira-extensora.png'
    },
    {
      nome: "Stiff com barra ou halteres",
      repeticao: "10 - 12",
      serie: 4,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoC/stiff.png'
    },
    {
      nome: "Mesa flexora",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoC/mesa-flexora.png'
    },
    {
      nome: "Panturrilha no leg press ou em pé",
      repeticao: "15 - 20",
      serie: 4,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoC/panturrilha.png'
    }
  ]

  exerciciosTreinoD: Exercicio[] = [
    {
      nome: "Desenvolvimento com barra ou halteres",
      repeticao: "8 - 12",
      serie: 4,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoD/desenvolvimento-halteres.png'
    },
    {
      nome: "Elevação lateral com halteres",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoD/elevacao-lateral-halteres.png'
    },
    {
      nome: "Elevação frontal com halteres ou barra",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoD/elevacao-frontal.png'
    },
    {
      nome: "Encolhimento com barra para trapézio",
      repeticao: "10 - 12",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoD/encolhimento-com-barra.png'
    },
    {
      nome: "Elevação posterior com halteres",
      repeticao: "12 - 15",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoD/elevacao-posterior.png'
    },
    {
      nome: "Abdômen: prancha isométrica",
      repeticao: "30 - 60 segundos",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoD/prancha-isometrica.png'
    },
    {
      nome: "Abdominal infra ou canivete no banco",
      repeticao: "15 - 20",
      serie: 3,
      peso: 0,
      linkCapa: '/app-academia/assets/images/treinoD/abdominal-infra.png'
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
