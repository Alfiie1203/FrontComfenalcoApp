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

  public idSolicitud: number
  public solicitud: Solicitudes

  constructor(public solicitudesService: SolicitudesService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // let params=this.activatedRoute.params['_value'];
    // this.idSolicitud = params.idSolicitud;
    // console.log(this.idSolicitud);
    // this.solicitudesService.findById(this.idSolicitud).subscribe(data=>{
    //   this.solicitud = data;
    //   console.table(this.solicitud);
    // })
  }

  public update(): void {
  this.solicitudesService.editarSolicitud(this.solicitud).subscribe(solicitud => {
    this.router.navigate(['/dashboard'])
    Swal.fire('Solicitud actualizada',
    `Solicitud con Id ${this.solicitud.idSubsidios} editada con éxito!`, 'success')
  }
  );
}

}
