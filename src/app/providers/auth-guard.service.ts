import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public authenticationService: UserData
  ) { }

  canActivate(): boolean {
    return this.authenticationService.isAuthenticated();
  }
}
