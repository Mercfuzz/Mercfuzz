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
			imageSrc: ['assets/img/sword_cross_icon_135139.svg'],
			textContent: 'RANDOM TEXT ETC',
		},

		EXP: {
			id: this.id.EXP,
			textContent: 'EXP',
			imageSrc: ['assets/img/game-select-icon-hover.png']
		},

		POOL: {
			id: this.id.POOL,
			textContent: 'POOL',
			imageSrc: ['assets/img/thumb_ekko_guia.png'] 
		},

		MIDIA: {
			id: this.id.MIDIA,
			textContent: 'MIDIA',
			imageSrc: ['assets/img/top10chall.png']
		
		},

    SIDEBAR: {
      id: this.id.SIDEBAR,
      textContent: 'MIDIA',
    },

		MINIMIZE: {
			id: undefined,
			title: undefined,
			textContent: undefined,
			imageSrc: undefined,
			anchor: undefined,
		},
	};

  constructor() { }

  getHtmlObjects(): OptionObjects{
    return this.optionObject;
  }
}
