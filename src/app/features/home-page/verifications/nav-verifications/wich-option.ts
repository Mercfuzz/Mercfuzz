import { Injectable } from "@angular/core";
import { RenderObjectsService } from "../../services/render-objects.service";
import { BtnId } from "../../utils/btn-id.util";
import { isMecanica, isNotEmpty, isEmpty, isExp, isPool, isMidia, isSideBar } from "./options-conditionals";
import { OptionObjects } from "../../utils/option-object.util";

@Injectable({
  providedIn: 'root'
})

export class WichOption{

  renders: OptionObjects;

  constructor(renderObjects: RenderObjectsService){
    this.renders = renderObjects.getHtmlObjects();
  }

  public wichOption(btnId: BtnId, signal: boolean): any{
    //se é botão de apresentação -->
    if(isMecanica(btnId)) {
      if(isNotEmpty(signal)){
        return this.renders.MINIMIZE;
      }else if(isEmpty(signal)){ 
        return this.renders.MECANICA;
      }
    }

    if(isExp(btnId)) {
      if(isNotEmpty(signal)){
        return this.renders.MINIMIZE;     
      }else if(isEmpty(signal)){ 
        return this.renders.EXP;
      }
    }

    if(isPool(btnId)) {
      if(isNotEmpty(signal)){
        return this.renders.MINIMIZE;
      }else if(isEmpty(signal)){ 
        return this.renders.POOL;
      }
    }

    if(isMidia(btnId)) {
      if(isNotEmpty(signal)){
        return this.renders.MINIMIZE;
      }else if(isEmpty(signal)){ 
        return this.renders.MIDIA;
      }
    }
    //se é botão da side bar -->
    if(isSideBar(btnId)) {
      if(isNotEmpty(signal)){
        return this.renders.MINIMIZE;
      }else if(isEmpty(signal)){ 
        return this.renders.SIDEBAR;
      }
    }

    throw Error('Opção inválida');
  }
  
}    
