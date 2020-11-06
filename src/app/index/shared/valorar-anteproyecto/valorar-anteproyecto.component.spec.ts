import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorarAnteproyectoComponent } from './valorar-anteproyecto.component';

describe('ValorarAnteproyectoComponent', () => {
  let component: ValorarAnteproyectoComponent;
  let fixture: ComponentFixture<ValorarAnteproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorarAnteproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorarAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
