import { Injectable } from '@angular/core';
import { BtnId } from '../utils/btn-id.util';
import { OptionObjects } from '../utils/option-object.util';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RenderObjectsService {
	id = BtnId;
  	optionObject: OptionObjects = {
		MECANICA: {
			tag: 'mecanica',
			id: this.id.MECANICA,
			title: 'Mecânica na prática',
			textContent: 'RANDOM TEXT ETC',
		},

		EXP: {
			tag: 'exp',
			id: this.id.EXP,
			title: 'Experiência',
			textContent: 'INSIRA ALGO SOBRE EXP AQUI',
		},

		POOL: {
			tag: 'pool',
			id: this.id.POOL,
			title: 'Champion Pool',
			textContent: 'INSIRA ALGO SOBRE POOL AQUI',
		},

		MIDIA: {
			tag: 'midia',
			id: this.id.MIDIA,
			title: 'Mídia',
			textContent: 'INSIRA ALGO SOBRE MIDIA AQUI',	
		},

    	SIDEBAR: {
			tag: 'sidebar',
      		id: this.id.SIDEBAR,
			title: "Na vercel :",
			textContent:["google", "facebook","twitter"],
      		anchor:[
				"https://www.w3schools.com/css/css_list.asp",
				"www.facebook.com",
				"www.twitter.com",
			],
			class: 'navBar_content',
    	},

		MINIMIZE: {
			tag: 'minimize',
			id: this.id.MINIMIZE,
			title: '',
			textContent: '',
			imageSrc: '',
			anchor: undefined,
			class: '',
		},
	};

	constructor() { }

	getHtmlObjects(): Observable<OptionObjects> {
    return of(this.optionObject);
  	}
}
