import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cursos } from '../modelo/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  listaDeCurso(): Cursos[] {
    return [
      { _id: '1', nome: 'Angular', categoria: 'front-end' }
    ]
  }
}
