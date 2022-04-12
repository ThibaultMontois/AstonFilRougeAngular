import { Component, OnInit, Input } from '@angular/core';
import { AuthUser } from 'src/app/models/auth-user.model';
import { AuthUserService } from 'src/app/services/auth-user.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!:AuthUser | null;;
  constructor(private authUserService:AuthUserService, private router: Router ) {
    this.user = this.authUserService.user;
    if(this.user==null){
      this.router.navigate(['/login'])
    }
   }

  ngOnInit(): void {
  }

}
