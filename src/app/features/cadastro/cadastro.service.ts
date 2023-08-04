//apaguei o import dele mesmo
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroData } from 'src/app/features/cadastro/interfaces/cadastro-data';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  read(): Observable<CadastroData[]> {
    return this.http.get<CadastroData[]>(this.API);
  };

  create(cadastro: CadastroData): Observable<CadastroData> {
    return this.http.post<CadastroData>(this.API, cadastro);
  };
}
