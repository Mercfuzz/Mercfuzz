import { Injectable } from '@angular/core';
import { BtnId } from '../utils/btn-id.util';
import { OptionObjects } from '../utils/option-object.util';

@Injectable({
  providedIn: 'root'
})
export class RenderObjectsService {
	id = BtnId;
  	optionObject: OptionObjects = {
		MECANICA: {
			id: this.id.MECANICA,
			title: 'Mecânica na prática',
			textContent: 'RANDOM TEXT ETC',
		},

		EXP: {
			id: this.id.EXP,
			textContent: 'INSIRA ALGO SOBRE EXP AQUI',
		},

		POOL: {
			id: this.id.POOL,
			textContent: 'INSIRA ALGO SOBRE POOL AQUI',
		},

		MIDIA: {
			id: this.id.MIDIA,
			textContent: 'INSIRA ALGO SOBRE MIDIA AQUI',	
		},

    	SIDEBAR: {
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
			id: undefined,
			title: undefined,
			textContent: undefined,
			imageSrc: undefined,
			anchor: undefined,
			class: undefined,
		},
	};

	constructor() { }

	getHtmlObjects(): OptionObjects {
    return this.optionObject;
  	}
}
