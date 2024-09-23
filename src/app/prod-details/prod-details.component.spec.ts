import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetailsComponent } from './prod-details.component';

describe('ProdDetailsComponent', () => {
  let component: ProdDetailsComponent;
  let fixture: ComponentFixture<ProdDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdDetailsComponent]
    });
    fixture = TestBed.createComponent(ProdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
