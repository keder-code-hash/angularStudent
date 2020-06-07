import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {
  cashierloggedIn:boolean;
  constructor(private tokenStorage:TokenService) { }

  ngOnInit(): void 
  {
    if(this.tokenStorage.getToken())
    {
      this.cashierloggedIn=true;
    }
    else{
      this.cashierloggedIn=false;
    }
  }
  logOut()
  {
    this.tokenStorage.signOut();
    this.cashierloggedIn=false;
  }
}
