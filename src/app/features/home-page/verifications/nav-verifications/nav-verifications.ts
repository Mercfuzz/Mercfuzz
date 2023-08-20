import { NavOptions } from "../../home.component";

export const navVerification = function(option: NavOptions, isEmpty: boolean): any{

  if(option === NavOptions.MECANICA){
    if(isEmpty != true){
      return '';

    }else if(isEmpty === true){
      return NavOptions.MECANICA;

    }
  }

  if(option === NavOptions.EXP){
    if(isEmpty != true){
      return '';

    }else if(isEmpty === true){
      return NavOptions.EXP;

    }
  }

  if(option === NavOptions.POOL){
    if(isEmpty != true){
      return '';

    }else if(isEmpty === true){
      return NavOptions.POOL;

    }
  }

  if(option === NavOptions.MIDIA){
    if(isEmpty != true){
      return '';

    }else if(isEmpty === true){
      return NavOptions.MIDIA;

    }
  }
  
  
}

