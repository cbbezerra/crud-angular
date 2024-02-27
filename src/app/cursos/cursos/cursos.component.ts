import { Component, OnInit } from '@angular/core';

import { Cursos } from './../modelo/cursos';
import { CursosService } from '../service/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Cursos [] = [];
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursosService: CursosService) {

   }

  ngOnInit(): void {
    this.cursos = this.cursosService.listaDeCurso();
  }

}
