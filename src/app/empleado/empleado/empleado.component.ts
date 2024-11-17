import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.less'
})
export class EmpleadoComponent {
  nombre = 'empleado';
  apellido= "apellido";
  //private edad=31;
  edad=21;
  empresa="Nombre empresa";
/*
  getedad(){
    return this.edad;
  }
*/
}
