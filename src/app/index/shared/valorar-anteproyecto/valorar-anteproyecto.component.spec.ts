import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorarAnteproyectoModalComponent } from './valorar-anteproyecto.component';

describe('ValorarAnteproyectoComponent', () => {
  let component: ValorarAnteproyectoModalComponent;
  let fixture: ComponentFixture<ValorarAnteproyectoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorarAnteproyectoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorarAnteproyectoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
