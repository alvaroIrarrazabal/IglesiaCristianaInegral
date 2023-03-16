import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PersonaService } from 'src/app/services/persona.service';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';



@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort= new MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public personaService: PersonaService,
    public dialog: MatDialog,
    public snacbar: MatSnackBar,
    public router: Router
  ) {}

  displayedColumns: string[] = [
    'nombre',
    'apellidoP',
    'apellidoM',
    'email',
    // 'telefono',
    // 'fecha_nacimiento',
    // 'nombrePais',
    // 'nombreRegion',
    // 'nombreComuna',
    'nombreRol',
    'nombreSupervisor',
    'acciones',
  ];
  public personas: Persona[] = [];

  listPersonas: any = [];

  ngOnInit(): void {
    this.obtenerPersona();
  }

  obtenerPersona() {
    this.personaService.getPersonas().subscribe((data) => {
      this.personas = data;
      console.log(data);
      this.listPersonas = new MatTableDataSource(this.personas);
      this.listPersonas.paginator = this.paginator;
      this.listPersonas.sort = this.sort;
    });
  }

  eliminar(persona: any): void {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro que desea eliminar a la persona?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'aceptar') {
        if (persona.role.id !==4) {
          this.personaService
            .deletePersona(persona.id)
            .subscribe((response) => {
              console.log(response);
              this.personas = this.personas.filter((per) => per !== persona);
              this.obtenerPersona();
              this.snacbar.open('La persona fue eliminado con exito', '', {
                duration: 3000,
              });
            });
        }else{
          this.snacbar.open('No se puede eliminar a la persona ', '', {
            duration: 3000,
          });
        }
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listPersonas.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.listPersonas.sort = this.sort;
    this.listPersonas.paginator = this.paginator;
  }

}
