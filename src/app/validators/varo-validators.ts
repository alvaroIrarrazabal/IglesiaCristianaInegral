import { FormControl, ValidationErrors } from "@angular/forms";

export class VaroValidators {

  static noEspaciosVacios(control:FormControl): ValidationErrors {
  //verificar si el string contiene solo espacios vacios

    if((control.value != null) && (control.value.trim().length==0)){
      //invalido, retornar objeto error

      return {'noEspaciosVacios':true};
    }else{
      //valido return null
      return null;
    }
  }
}
