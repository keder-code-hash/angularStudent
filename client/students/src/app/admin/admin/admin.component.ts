import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 adminloggedIn:boolean=false;
  constructor(private tokenStorage:TokenService) { }

  ngOnInit(): void 
  {
    if(this.tokenStorage.getToken())
    {
      this.adminloggedIn=true;
    }
    else{
      this.adminloggedIn=false
    }
  }
  
logOut()
{
  this.tokenStorage.signOut();
  this.adminloggedIn=false;
  //window.location.reload();
}
}
