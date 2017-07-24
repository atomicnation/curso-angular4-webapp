import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html'
})

export class HomeComponent{
	public titulo: string;

	constructor(){
		this.titulo = 'Web de productos con Angular 4';
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts')
	}
}