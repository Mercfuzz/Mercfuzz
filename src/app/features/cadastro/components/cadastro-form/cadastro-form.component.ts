import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroData } from '../../interfaces/cadastro-data';
import { CadastroService } from 'src/app/features/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit{

  form!: FormGroup
 
  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      nickname: ['',Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3),
        Validators.maxLength(11)
      ])],
      nascimento: ['',Validators.required],    //adicionar validação de 18 anos
      email: ['',Validators.compose([
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      check: [false, Validators.requiredTrue]
    })
  }

  createAccount() {
    console.log(this.form.valid, this.form.value);
    console.log('erro', this.form.get('nickname')?.errors);
    if(this.form.valid){
      this.cadastroService.create(this.form.value).subscribe();
      this.router.navigate(['/home'])
    }
    
    
  }

  disabledOff():string {
    if (this.form.valid) {
      return 'button'
    }
    return 'buttonOff'
  }

} 
