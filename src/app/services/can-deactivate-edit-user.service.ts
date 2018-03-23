import { Injectable } from '@angular/core';
import { EditUtenteComponent } from '../components/edit-utente/edit-utente.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class CanDeactivateEditUserService implements CanDeactivate<EditUtenteComponent>{

  constructor() { }

  canDeactivate(component: EditUtenteComponent) {

    if (component.isChanged) {
      return confirm('Sei sicuro di voler uscire?');
    } else {
      return true;
    }

  }

}
