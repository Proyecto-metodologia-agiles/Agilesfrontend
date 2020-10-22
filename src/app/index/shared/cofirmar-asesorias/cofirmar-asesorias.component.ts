import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface User {
	name: string;
}

@Component({
	selector: 'cofirmar-asesorias',
	templateUrl: './cofirmar-asesorias.component.html',
	styleUrls: ['./cofirmar-asesorias.component.css']
})

export class CofirmarAsesoriasComponent implements OnInit {
	Cortes = ['Corte 1', 'Corte 2'];
	tempdata: User[] = [
		{ name: 'Alejandro garcia lopez' },
		{ name: 'Andrea de la hoz' },
		{ name: 'Grabiel garcia marquez' },
		{ name: 'fernadez alonso' }]
	myControl = new FormControl();
	filteredOptions: Observable<User[]>;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
	}
	ngOnInit() {
		this.filteredOptions = this.myControl.valueChanges
			.pipe(
				startWith(''),
				map(value => typeof value === 'string' ? value : value.name),
				map(name => name ? this._filter(name) : this.tempdata.slice())
			);
	}

	async onSubmit() {
		console.log("guardar");

	}

	displayFn(user: User): string {
		return user && user.name ? user.name : '';
	}

	private _filter(name: string): User[] {
		const filterValue = name.toLowerCase();

		return this.tempdata.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
	}
}