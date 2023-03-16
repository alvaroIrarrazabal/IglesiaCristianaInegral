import { Persona } from './../../models/persona';
import { Pais } from './../../models/pais';
import { Component, OnInit } from '@angular/core';
import {
  CheckboxRequiredValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Commune } from 'src/app/models/commune';
import { Region } from 'src/app/models/region';
import { PersonaService } from 'src/app/services/persona.service';
import { VaroValidators } from 'src/app/validators/varo-validators';
import { Rol } from 'src/app/models/rol';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss'],
})
export class FormPersonaComponent implements OnInit {
  id: any;
  accion = 'Crear';
  persona = new Persona();

  supervisor: any[] = [];
  personas: Persona[] = [];
  formPersonas: FormGroup;
  paises: Pais[] = [];
  comuna: Commune[] = [];
  region: Region[] = [];
  rols: Rol[] = [];
  paisSeleccionado: number;
  recibeEventRol: any[] = [];
  rolSeleccionado: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snacbar: MatSnackBar,
    private eRoute: ActivatedRoute
  ) {

    const idParam = 'id';
    this.id = this.eRoute.snapshot.params[idParam];
    if (this.id !== undefined) {
      this.accion = 'Editar';
      this.Editar(this.id);
    } else {
      this.accion = 'Crear';
    }

    this.setForm()
  }

  ngOnInit(): void {

    this.poblarPaises();
    this.poblarRol();
    this.poblarSupervisores();
  }

  setForm(){

    this.formPersonas = this.formBuilder.group({
      persona: this.formBuilder.group({
        id: [''],
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          VaroValidators.noEspaciosVacios,
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          VaroValidators.noEspaciosVacios,
        ]),
        lastName2: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          VaroValidators.noEspaciosVacios,
        ]),
        email: new FormControl('', [
          Validators.required,
          VaroValidators.noEspaciosVacios,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),

        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          VaroValidators.noEspaciosVacios,
        ]),
        socialNetwork: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          VaroValidators.noEspaciosVacios,
        ]),
        civilStatus: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          VaroValidators.noEspaciosVacios,
        ]),
        gender: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          VaroValidators.noEspaciosVacios,
        ]),
        profession: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          VaroValidators.noEspaciosVacios,
        ]),
        spouse: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          VaroValidators.noEspaciosVacios,
        ]),

        birthDate: [''],

        country: [''],
        region: [''],
        commune: [''],
        supervisorId: [''],
        role: [''],
      }),
    });
  }

  editarPersona(persona: Persona) {
    this.personaService.updatePersona(persona, this.id);
    this.snacbar.open('La persona fue editada con exito', '', {
      duration: 3000,
    });
    this.router.navigate(['/']);
  }

  Editar(id: any) {
    this.personaService.getPersonaId(id).subscribe({
      next: (data) => {
        this.persona = data;
        console.log(this.persona);
        this.formPersonas.get('persona.name')?.setValue(this.persona.name);
        this.formPersonas
          .get('persona.lastName')
          ?.setValue(this.persona.lastName);
        this.formPersonas
          .get('persona.lastName2')
          ?.setValue(this.persona.lastName2);
        this.formPersonas.get('persona.email')?.setValue(this.persona.email);
        this.formPersonas.get('persona.phone')?.setValue(this.persona.phone);
        this.formPersonas
          .get('persona.birthDate')
          ?.setValue(this.persona.birthDate);
        this.formPersonas
          .get('persona.country')
          ?.setValue(this.persona.country.id);
        this.formPersonas
          .get('persona.region')
          ?.setValue(this.persona.region.id);
        this.formPersonas
          .get('persona.commune')
          ?.setValue(this.persona.commune.id);
        this.formPersonas.get('persona.role')?.setValue(this.persona.role);
        this.formPersonas
          .get('persona.supervisorId')
          ?.setValue(this.persona.supervisorId);
      },
      error: (error) => {
        console.error('Error ', error);
      },
    });
  }

  recibirRol(event: any) {
    let verDato = event.target;
    if (verDato.value > 0 && verDato.checked) {
      this.rolSeleccionado.push(verDato.value);
      console.log(this.rolSeleccionado);
    } else {
      this.rolSeleccionado.splice(
        verDato.value.indexOf(this.rolSeleccionado),
        1
      );
      console.log(this.rolSeleccionado);
    }
  }


  get apellidoP() {
    return this.formPersonas.get('persona.lastName');
  }
  get apellidoM() {
    return this.formPersonas.get('persona.lastName2');
  }
  get email() {
    return this.formPersonas.get('persona.email');
  }

  get socialNetwork() {
    return this.formPersonas.get('persona.socialNetwork');
  }
  get civilStatus() {
    return this.formPersonas.get('persona.civilStatus');
  }
  get gender() {
    return this.formPersonas.get('persona.gender');
  }
  get profession() {
    return this.formPersonas.get('persona.profession');
  }
  get spouse() {
    return this.formPersonas.get('persona.spouse');
  }
  get telefono() {
    return this.formPersonas.get('persona.phone');
  }
  get nacimiento() {
    return this.formPersonas.get('persona.birthDate');
  }

  get pais() {
    return this.formPersonas.get('persona.country.id');
  }
  get regiones() {
    return this.formPersonas.get('persona.region.id');
  }
  get comunas() {
    return this.formPersonas.get('persona.comunne.id');
  }

  get roles() {
    return this.formPersonas.get('persona.role');
  }

  //Polulate countries poblar paisesdireccion

  poblarPaises() {
    this.personaService.getPaises().subscribe((data) => {
      console.log('Retrieved countries: ' + JSON.stringify(data));
      console.log(data);
      this.paises = data;
    });
  }

  buscarPais(paises: any) {
    console.log(paises.target.value);
    console.log(paises);
    this.poblarRegion(paises.target.value);
  }

  poblarRegion(parametro: any): void {
    this.personaService.getRegiones(parametro).subscribe((data) => {
      console.log('Retrieved regiones: ' + JSON.stringify(data));
      this.region = data;
    });
  }

  buscarRegion(region: any) {
    console.log(region.target.value);
    this.poblarComuna(region.target.value);
  }

  poblarComuna(parametro: any): void {
    this.personaService.getComunas(parametro).subscribe((data) => {
      console.log('Retrieved comunas: ' + JSON.stringify(data));
      this.comuna = data;
      console.log(this.comuna);
    });
  }

  buscarComuna(comuna: any) {
    console.log(comuna.target.value);
  }

  poblarRol() {
    this.personaService.getRol().subscribe((data) => {
      console.log('Retrieved roles :' + JSON.stringify(data));
      this.rols = data;
    });
  }

  poblarSupervisores() {
    this.personaService.getSupervisores().subscribe({
      next: (data) => {
        this.supervisor = data;
        console.log(this.supervisor);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // onchange(categoriaSelected: any, id: any){
  //   console.log(id.target.value)
  //   if (id) { //Si el elemento fue seleccionado
  //     //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
  //     this.rols.push(categoriaSelected);
  //   } else { //Si el elemento fue deseleccionado
  //     //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
  //     this.rols.splice(this.rol.indexOf(categoriaSelected), 1);
  //   }

  // }

  onSubmit() {
    if (this.formPersonas.invalid) {
      this.formPersonas.markAllAsTouched();
      return;
    }
    console.log('Handling the submit button');
    console.log(this.formPersonas.get('persona')?.value);

    this.persona = this.formPersonas.controls['persona'].value;

    this.personaService.crearPersona(this.persona).subscribe((data) => {
      this.persona = data;
      console.log(data);
      this.snacbar.open('La persona fue creada con exito', '', {
        duration: 3000,
      });
      this.router.navigate(['/']);
    });
  }

  guardarPersona() {

    const personas: Persona = {
      id: this.formPersonas.get('persona.id')?.value,
      name: this.formPersonas.get('persona.name')?.value,
      lastName: this.formPersonas.get('persona.lastName')?.value,
      lastName2: this.formPersonas.get('persona.lastName2')?.value,
      email: this.formPersonas.get('persona.email')?.value,
      phone: this.formPersonas.get('persona.phone')?.value,
      birthDate: this.formPersonas.get('persona.birthDate')?.value,
      country: this.formPersonas.get('persona.country')?.value,
      region: this.formPersonas.get('persona.region')?.value,
      commune: this.formPersonas.get('persona.commune')?.value,
      role:[]=this.rolSeleccionado,
      supervisorId: this.formPersonas.get('persona.supervisorId')?.value,
    };

    console.log(personas);

    this.personaService.crearPersona(personas).subscribe((data) => {
      this.persona = data;
      console.log(data);
      this.snacbar.open('La persona fue creada con exito', '', {
        duration: 3000,
      });
      this.router.navigate(['/']);
    });
  }
}
