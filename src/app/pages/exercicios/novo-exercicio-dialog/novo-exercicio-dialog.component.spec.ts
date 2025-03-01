import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoExercicioDialogComponent } from './novo-exercicio-dialog.component';

describe('NovoExercicioDialogComponent', () => {
  let component: NovoExercicioDialogComponent;
  let fixture: ComponentFixture<NovoExercicioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoExercicioDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoExercicioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
