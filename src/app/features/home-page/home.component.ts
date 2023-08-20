import { Component } from '@angular/core';
import { navVerification } from './verifications/nav-verifications/nav-verifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ex!: string;
  navOptions = NavOptions;

  showEx(option: NavOptions, isEmpty: boolean): void{
    if (this.ex == '' || this.ex != option){
      isEmpty = true
    }
    this.ex = navVerification(option, isEmpty)
  }

}

export enum NavOptions {
  MECANICA = 'Mecânica na prática',
  EXP = 'Minhas experiências',
  POOL = 'Champion Pool',
  MIDIA = 'Mídia',
  VAZIO = '',
}

