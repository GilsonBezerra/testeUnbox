import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = 'https://randomuser.me/api/?results=50&nat=br';

  constructor(
    private http: HttpClient
  
  ) { }

  // Buscando todos os usuários
  public getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
      
  // Buscando um usuário pelo uuid
  public getUserByUuid(uuid: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${uuid}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
  

}
