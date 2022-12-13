import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";


@Injectable()

export class GuardService implements CanActivate{

  constructor(private userService :UserService ,private router :Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.userService.IsAuthenticated()) {
      return true
    }else{
      this.router.navigate(['/'])
      return false
    }
  }
}