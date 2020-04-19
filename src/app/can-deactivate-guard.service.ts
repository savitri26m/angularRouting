import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



export interface CanDeactivateGuard {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()

export class CanDeactivateGuardService implements CanDeactivate<CanDeactivateGuard> {

  constructor() { }

  canDeactivate(component: CanDeactivateGuard,
    currentRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return component.canDeactivate(); 
     }
}
