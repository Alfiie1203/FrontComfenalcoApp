import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Programas } from 'src/app/domain/programas';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';
import { ProgramasService } from 'src/app/service/programas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public msg:string="";
  public programas:Programas;

  constructor(public programasService:ProgramasService) { }
  
  public findAll():void{
    this.programasService.listar().subscribe(data=>{
      this.programas=data;
    });
  }


  ngOnInit(): void {
    this.findAll();
  }

}
