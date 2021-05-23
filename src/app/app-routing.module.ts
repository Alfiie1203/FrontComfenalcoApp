import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { IngresarComponent } from './component/ingresar/ingresar.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { ResetcontraComponent } from './component/resetcontra/resetcontra.component';
import { AngularFireAuthGuard,redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { IngresarAdminComponent } from './component/ingresar-admin/ingresar-admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProgramasComponent } from './component/programas/programas.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { VerAplicacionesComponent } from './component/ver-aplicaciones/ver-aplicaciones.component';
import { RevisionDocumentosComponent } from './component/revision-documentos/revision-documentos.component';
import { ListarCiudadesComponent } from './component/listar-ciudades/listar-ciudades.component';
import { ModificarFormComponent } from './component/modificar-form/modificar-form.component';
import { ConsultarSolicitudComponent } from './component/consultar-solicitud/consultar-solicitud.component';

const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['/ingresar']);

const routes: Routes = [
  {path:'',component:IngresarComponent},

  {path:'ingresar/admin',component:IngresarAdminComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/ConsultarSolicitud',component:ConsultarSolicitudComponent},
  {path:'dashboard/Modificar/:Id',component:ModificarFormComponent},
  {path:'ver-aplicaciones',component:RevisionDocumentosComponent},

  {path:'listarCiudades', component:ListarCiudadesComponent},


  {path:'ingresar',component:IngresarComponent},
  {path:'verAplicaiones',component:VerAplicacionesComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'resetear',component:ResetcontraComponent},
  {path:'programas/:PROGRAMA',component:ProgramasComponent},
  {path:'home',component:HomeComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectUnauthorizedToLogin}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
