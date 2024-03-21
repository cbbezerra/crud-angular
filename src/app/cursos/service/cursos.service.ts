import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cursos } from '../modelo/cursos';
import { tap, first, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'api/cursos';

  constructor(private httpClient: HttpClient) { }

  listaDeCurso() {
    return this.httpClient.get<Cursos[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(cursos => console.log(cursos))
    );
  }
}
