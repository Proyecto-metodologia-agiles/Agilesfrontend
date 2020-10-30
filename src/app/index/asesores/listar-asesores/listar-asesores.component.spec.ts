import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAsesoresComponent } from './listar-asesores.component';

describe('ListarAsesoresComponent', () => {
  let component: ListarAsesoresComponent;
  let fixture: ComponentFixture<ListarAsesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAsesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
