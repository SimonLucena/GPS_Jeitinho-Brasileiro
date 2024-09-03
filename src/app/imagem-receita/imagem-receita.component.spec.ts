import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemReceitaComponent } from './imagem-receita.component';

describe('ImagemReceitaComponent', () => {
  let component: ImagemReceitaComponent;
  let fixture: ComponentFixture<ImagemReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImagemReceitaComponent]
    });
    fixture = TestBed.createComponent(ImagemReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
