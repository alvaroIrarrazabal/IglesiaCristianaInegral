import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Commune } from '../models/commune';
import { Pais } from '../models/pais';
import { Persona } from '../models/persona';
import { Region } from '../models/region';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  listPersona: any = [];

  private httpHeader = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) {}


  //obtiene todas las personas
  getPersonas(): Observable<Persona[]> {
    return this.http
    .get(environment.endpoint)
    .pipe(map((response)=>response as Persona[] ))
  }





  getSupervisores(): Observable<Persona[]> {
    return this.http
    .get(environment.endpointSupervisores)
    .pipe(map((response)=>response as Persona[] ))
  }

  getSupervisados(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${environment.endpointSupervisados}/${id}`).pipe(
      catchError(e=>{
        Swal.fire('Error al obtener a los supervisados',e.error.mensaje,'error');
        return throwError(e);
      })
    )

  }




  getCumpleaños(): Observable<Persona[]> {
    return this.http
    .get(environment.endpointCumple)
    .pipe(map((response)=>response as Persona[] ))
  }




  getPersonaId(id:number):Observable<Persona>{
    console.log(JSON.stringify(id))

    return this.http.get<Persona>(`${environment.endpoint}/${id}`).pipe(
      catchError(e=>{
        return throwError(e);
      })
    )

  }



  crearPersona(persona:Persona):Observable<Persona>{
    console.log(JSON.stringify( persona))
  return this.http.post<Persona>(environment.endpoint,persona ,{
    headers: this.httpHeader,
  }).pipe(
    catchError(e =>{

      console.error(e.error.mensaje)
      Swal.fire(e.error.mensaje,"Error al agregar la persona")
      return throwError(e);
    })
  )

  }




  deletePersona(id:any): Observable<Persona>{
  return this.http.delete<Persona>(`${environment.endpoint}/${id}`,{headers:this.httpHeader
  }).pipe(
    catchError(e =>{
      console.error(e.error.mensaje)
      Swal.fire('Error al eliminar',e.error.mensaje)
      return throwError(e);
    })
  )

  }




  updatePersona(persona:Persona,id:number):Observable<Persona>{
    return this.http.put<Persona>(`${environment.endpoint}/${persona.id}`,persona,{
      headers: this.httpHeader,
    }).pipe(
      catchError(e=>{
        console.log(e.error.mensaje)
        return throwError(e);

      })
    );
  }




  getPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(environment.endpointPais)
    .pipe(map((response)=>response as Pais[] ))
    .pipe(
      catchError(e=>{
        Swal.fire('Error al obtener el pais',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }



  getRegiones(parametro:any):Observable<Region[]>{
    return this.http.get<Region[]>(environment.endpointReg+parametro)
    .pipe(map((response)=>response as Region[] ))
    .pipe(
      catchError(e=>{
        Swal.fire('Error al obtener la region',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }



  getComunas(parametro:any):Observable<Commune[]>{
    return this.http.get<Commune[]>(environment.endpointComu+parametro)
    .pipe(map((response)=>response as Commune[] ))
    .pipe(
      catchError(e=>{
        Swal.fire('Error al obtener la comuna',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }




  getRol():Observable<Rol[]>{
    return this.http.get<Rol[]>(environment.endpointrols)
    .pipe(map((response)=>response as Rol[] ))
    .pipe(
      catchError(e=>{
        Swal.fire('Error al obtener el rol',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
}

