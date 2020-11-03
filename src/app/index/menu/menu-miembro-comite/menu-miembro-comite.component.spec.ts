import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMiembroComiteComponent } from './menu-miembro-comite.component';

describe('MenuMiembroComiteComponent', () => {
  let component: MenuMiembroComiteComponent;
  let fixture: ComponentFixture<MenuMiembroComiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMiembroComiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMiembroComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
