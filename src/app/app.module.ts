import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarComponent } from './component/ingresar/ingresar.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ResetcontraComponent } from './component/resetcontra/resetcontra.component';
import { HttpClientModule } from '@angular/common/http';
import { IngresarAdminComponent } from './component/ingresar-admin/ingresar-admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProgramasComponent } from './component/programas/programas.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { VerAplicacionesComponent } from './component/ver-aplicaciones/ver-aplicaciones.component';
import { RevisionDocumentosComponent } from './component/revision-documentos/revision-documentos.component';
import { ListarCiudadesComponent } from './component/listar-ciudades/listar-ciudades.component';
import { FormularioAplicacionComponent } from './component/formulario-aplicacion/formulario-aplicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarComponent,
    RegistrarComponent,
    HomeComponent,
    HeaderComponent,
    ResetcontraComponent,
    IngresarAdminComponent,
    DashboardComponent,
    NavbarComponent,
    ProgramasComponent,
    ContactoComponent,
    VerAplicacionesComponent,
    RevisionDocumentosComponent,
    ListarCiudadesComponent,
    FormularioAplicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebases),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
