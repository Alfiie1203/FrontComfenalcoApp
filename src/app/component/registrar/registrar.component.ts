import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/domain/usuarios';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  public email:string;
  public password:string;
  public usuarios:Usuarios;
  public msg:string="";

  constructor(public authComfenancoService:AuthComfenancoService,
              public activateRoute:ActivatedRoute,
              public usuariosService: UsuariosService,
              public router:Router) { }

  
  public registrar():void{
    
    this.guardar();
    this.authComfenancoService.createUser(this.email,this.password)
    .then(()=>{
      this.authComfenancoService.validarEmail();
      this.router.navigate(['/ingresar']);
    })
    .catch(e=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que te hicieron falta datos por llenar'
      })
    });
  }

  public guardar():void{

    this.usuariosService.registrar(this.usuarios).subscribe(ok=>{
      console.log("Registro");
    },err=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Recuerda que debes ingresar todos los datos'
      })
    });
  }

  ngOnInit(): void {
    this.usuarios= new Usuarios("","","","","","","","","","","");
  }

}
