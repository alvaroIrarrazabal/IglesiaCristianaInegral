import { PersonaService } from './../../services/persona.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cumple',
  templateUrl: './cumple.component.html',
  styleUrls: ['./cumple.component.scss']
})
export class CumpleComponent implements OnInit {
  today = new Date();
 year = this.today.getUTCFullYear();

  cumple :any[]=[];
  constructor(
    public personaService: PersonaService,
    public dialog: MatDialog,
    public snacbar: MatSnackBar,
    public router: Router
              ) { }



  ngOnInit(): void {

    this.mostrarCumpleaños();
    console.log(this.year)
  }



  mostrarCumpleaños() {
this.personaService.getCumpleaños().subscribe(data=>{
  console.log(data);
  this.cumple=data
  

})
  }

}
