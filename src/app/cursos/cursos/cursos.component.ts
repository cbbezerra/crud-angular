import { Component, OnInit } from '@angular/core';

import { Cursos } from './../modelo/cursos';
import { CursosService } from '../service/cursos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Cursos[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursosService: CursosService) {

    this.cursos$ = this.cursosService.listaDeCurso();
   }

  ngOnInit(): void {

  }

}
