import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado/empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  EmpleadoComponent,
  EmpleadosComponent
 ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'my-app';
  saludo= "Hola a todos";
}

