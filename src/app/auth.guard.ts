import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
 constructor(private router:Router){}
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
   if(this.isUserLoggedIn()){
    return true;
   }else{
    this.router.navigate(['/bye']);
    alert("please login you are redirected to login page");
    return false;
   }
 }
 private isUserLoggedIn():boolean{
  const user =localStorage.getItem('currentUser');
  return !!user;
 }
}

