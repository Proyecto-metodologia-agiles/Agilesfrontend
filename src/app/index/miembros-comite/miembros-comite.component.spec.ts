import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosComiteComponent } from './miembros-comite.component';

describe('MiembrosComiteComponent', () => {
  let component: MiembrosComiteComponent;
  let fixture: ComponentFixture<MiembrosComiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembrosComiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembrosComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
