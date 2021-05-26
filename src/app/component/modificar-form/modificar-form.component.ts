import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitudes } from 'src/app/domain/solicitudes';
import { SolicitudesService } from 'src/app/service/solicitudes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-form',
  templateUrl: './modificar-form.component.html',
  styleUrls: ['./modificar-form.component.scss']
})
export class ModificarFormComponent implements OnInit {

  public idSusuario: number
  public solicitud: Solicitudes

  constructor(public solicitudesService: SolicitudesService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let params = parseInt(this.activatedRoute.snapshot.paramMap.get('Id'));
    this.getById(params);
  }

  public update(): void {
  this.solicitudesService.editarSolicitud(this.solicitud).subscribe(solicitud => {
    this.router.navigate(['/dashboard'])
    Swal.fire('Solicitud actualizada',
    `Solicitud con Id ${this.solicitud.idSubsidio} editada con éxito!`, 'success')
  }
  );
}

  public getById(id: number): void{
    this.solicitudesService.listarSolicitudesPorId(id).subscribe(solicitud => {
      this.solicitud = solicitud;
    })
  }

}
