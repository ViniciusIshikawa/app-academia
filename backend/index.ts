import express from 'express';
import cors from 'cors';

interface Exercicio {
  nome: string;
  repeticao: string;
  serie: string;
  peso: string;
}

interface Workout {
    id: string;
    titulo: string;
    exercicios: Exercicio[];
}

const app = express();
const port = 3001;

app.use(cors());

const workouts: Workout[] = [
  {
    id: '1',
    titulo: 'Calisthenics at home',
    exercicios: [
      {
        nome: 'Push-ups',
        repeticao: '12',
        serie: '3',
        peso: 'corporal'
      },
      {
        nome: 'Squats',
        repeticao: '15',
        serie: '3',
        peso: 'corporal'
      },
      {
        nome: 'Plank',
        repeticao: '3',
        serie: '3 seconds',
        peso: 'corporal'
      },
      {
        nome: 'Glute-Bridge',
        repeticao: '12',
        serie: '3',
        peso: 'corporal'
      },
      {
        nome: 'Australian-Row',
        repeticao: '8',
        serie: '3',
        peso: 'corporal'
      }
    ]
  }
]

app.get('/api', (_req, res) => {
  res.send('API rodando junto com o Angular!');
});

app.get('/workouts', (_req, res) => {
  res.json(workouts);
});

app.get('/workouts/:id', (req, res) => {
  res.json(workouts.find(workout => workout.id === req.params.id));
})

app.listen(port, () => {
  console.log(`API ouvindo em http://localhost:${port}`);
});
