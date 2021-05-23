import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Solicitudes } from '../domain/solicitudes';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  public solicitud: Solicitudes
  url: string = `${environment.apiUrl}`

  constructor(public httpClient: HttpClient) { }

  public listarSolicitudes():Observable<Solicitudes[]>{
    return this.httpClient.get<Solicitudes[]>(`${this.url}consultarSubsidios`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  public editarSolicitud(solicitud: Solicitudes):Observable<any>{
    return this.httpClient.put<Solicitudes>(`${this.url}actualizarSubsidio`, solicitud).pipe(
      catchError(e => {
        Swal.fire('Error al actualizar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

}


