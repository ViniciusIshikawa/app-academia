import { Injectable } from '@angular/core';
import { Treino } from '../models/treino.model';
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';
import { Exercicio } from '../models/exercicio.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  constructor(
    private http: HttpClient
  ) { }

  private route: string = 'http://localhost:3001/workouts';

  getAllWorkouts(): Promise<Treino[]> {
    return firstValueFrom(this.http.get<Treino[]>(this.route));
  }

  getWorkoutByID(id: string): Promise<Treino> {
    return firstValueFrom(this.http.get<Treino>(`${this.route}/${id}`));
  }
}
