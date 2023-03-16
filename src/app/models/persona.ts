import { Commune } from './commune';
import { Pais } from './pais';
import { Region } from './region';
import { Rol } from './rol';

export class Persona {
 public id: number=0;
 public name: string='';
 public lastName: string ='';
 public lastName2: string ='';
 public email: string ='';
 public phone: string ='';
 public birthDate: Date;
 public country: Pais;
 public region: Region;
 public commune: Commune;
 public role: Rol[];
 public supervisorId: number=0;


}
