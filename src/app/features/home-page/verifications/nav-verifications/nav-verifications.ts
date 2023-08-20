import { NavOptions } from "../../home.component";
import { isMecanica, isNotEmpty, isEmpty, isExp, isPool, isMidia, isSideBar } from "./nav-conditionals";



export class WichOption{

  optionObject = {
		MECANICA: {
			id: NavOptions.MECANICA,
			title: 'Mecânica na prática',
			imageSrc: 'assets/img/sword_cross_icon_135139.svg',
			textContent: 'RANDOM TEXT ETC',
		},

		EXP: {
			id: NavOptions.EXP,
			textContent: 'EXP',
		},

		POOL: {
			id: NavOptions.POOL,
			textContent: 'POOL'
		},

		MIDIA: {
			id: NavOptions.MIDIA,
			textContent: 'MIDIA'
		
		},

    SIDEBAR: {
      id: NavOptions.SIDEBAR,
      textContent: 'MIDIA',
    },

		MINIMIZE: {
			id: 'empty',
			title: '',
			textContent: '',
			imageSrc: [''],
			anchor: [''],
		},
	}


  wichOption(option: NavOptions, signal: boolean): any{

    if(isMecanica(option)) {
      if(isNotEmpty(signal)){
        return this.optionObject.MINIMIZE;
      }else if(isEmpty(signal)){ 
        return this.optionObject.MECANICA;
      }
    }

    if(isExp(option)) {
      if(isNotEmpty(signal)){
        return this.optionObject.MINIMIZE;     
      }else if(isEmpty(signal)){ 
        return this.optionObject.EXP;
      }
    }

    if(isPool(option)) {
      if(isNotEmpty(signal)){
        return this.optionObject.MINIMIZE;
      }else if(isEmpty(signal)){ 
        return this.optionObject.POOL;
      }
    }

    if(isMidia(option)) {
      if(isNotEmpty(signal)){
        return this.optionObject.MINIMIZE;
      }else if(isEmpty(signal)){ 
        return this.optionObject.MIDIA;
      }
    }

    if(isSideBar(option)) {
      if(isNotEmpty(signal)){
        return this.optionObject.MINIMIZE;
      }else if(isEmpty(signal)){ 
        return this.optionObject.SIDEBAR;
      }
    }

    throw Error('Opção inválida');
  }
}    



