import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { GestionComiteComponent } from './Gestion-Comite.component';

describe('a Gestion-Comite component', () => {
	let component: GestionComiteComponent;
	let fixture: ComponentFixture<GestionComiteComponent>;


	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			imports: [HttpClientModule, FormsModule,
				ReactiveFormsModule
				, RouterTestingModule,
				HttpClientTestingModule,
				MatDialogModule,
				CommonModule],
			providers: [
				GestionComiteComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(() => {
		fixture = TestBed.createComponent(GestionComiteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});