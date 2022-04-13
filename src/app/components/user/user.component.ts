import { Component, OnInit, Input } from '@angular/core';
import { AuthUser } from 'src/app/models/auth-user.model';
import { AuthUserService } from 'src/app/services/auth-user.service';
import {Router} from "@angular/router"
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!:AuthUser | null;
  userData:any;
  userAddress:any;
  myJson:any = localStorage.getItem("auth_user");
  myUserId:any;
  constructor(private authUserService:AuthUserService, private router: Router, private databaseService:DatabaseService ) {
    if(localStorage.getItem("auth_user") != null){
      this.user = this.authUserService.user;
      if(this.user==null){
        this.router.navigate(['/login']);
      }else{
        var userEmail = JSON.parse(this.myJson).email;
        this.databaseService.getUserByEmail(userEmail).subscribe(
          (data:AuthUser)=>{
            this.userData = data;
            this.myUserId = this.userData.user.addressId;
            console.log(this.userData.user.addressId);
              this.databaseService.getAddressById(this.userData.user.addressId).subscribe(
                (data3:any)=>{
                  this.userAddress = data3;
                }
              )
          }
        )
      }
    }else{
      this.router.navigate(['/login']);
    }
   }

  ngOnInit(): void {
  }

}
