export class UserService{

  loggedIn : boolean = false

  login(){

    this.loggedIn = true
  }

  // logout(){
  //   this.loggedIn = false
  // }

  IsAuthenticated(){

    if(localStorage.getItem('logginToken') != null)
    {
      return true;
    }
    else{
      return false;

    }
   //return this.loggedIn ;
  }
}