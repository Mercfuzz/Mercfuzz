import { Component, OnInit } from '@angular/core';
import { WichOption } from './verifications/nav-verifications/wich-option';
import { OptionObject, OptionObjects } from './utils/option-object.util';
import { BtnId } from './utils/btn-id.util';
import { RenderObjectsService } from './services/render-objects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  private toRenderObjects!: OptionObjects;

  optionObject: OptionObject = {tag:'' ,id: 0, textContent: 'Explore as opções!'};
  
  constructor(
    private renderService: RenderObjectsService,
  ){}
    
  ngOnInit(){
    this.renderService.getHtmlObjects().subscribe((data => {this.toRenderObjects = data; console.log(data)}));
  }

  protected onOptionChange(object: OptionObject){
    this.optionObject = object;
    console.log(this.optionObject)
  }
  
}
