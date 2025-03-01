import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTreinoDialogComponent } from './novo-treino-dialog.component';

describe('NovoTreinoDialogComponent', () => {
  let component: NovoTreinoDialogComponent;
  let fixture: ComponentFixture<NovoTreinoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoTreinoDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoTreinoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
