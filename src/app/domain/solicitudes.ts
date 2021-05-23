export class Solicitudes {

  constructor(
    public idSubsidios: number,
    public idEstado: number,
    public idUsuario: number,
    public idPrograma: number,
    public fechaCreacion: Date,
    public fechaModificacion: Date,
    public fechaFinalizacion: Date,
    public formulario: string
  ){}

}
