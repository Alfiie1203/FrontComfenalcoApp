import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {

  public email:string;
  public password:string;
  public msg:string="";

  constructor(public authComfenancoService:AuthComfenancoService,
              public router:Router) { }

  public ingresar ():void{
    this.authComfenancoService.login(this.email,this.password)
    .then(()=>{
      this.router.navigate(['/home']);
      localStorage.setItem("email",this.email);
    })
    .catch(e=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que no estas registrado o tu cuenta fue inabilitada'
      })
    });
  }

  ngOnInit(): void {
  }


}
