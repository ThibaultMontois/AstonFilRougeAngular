import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthUser } from 'src/app/models/auth-user.model';
import { Club } from 'src/app/models/club.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  clubList!: Club[];

  @Input() authUser!: AuthUser | null;
  @Output() logOutEmitter: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private db: DatabaseService) {
    this.clubList = [];
  }

  ngOnInit(): void {
    this.db.getClubList().subscribe((response: any) => {
      let clubList: Club[] = response.clubList;
      let i: number = 0;
      let t: number = 0;
      while (t < clubList.length) {
        this.clubList.push(clubList[i]);
        t++;
        i++;
        if(t==3){
          break;
        }
      }
    })
  }

  logOut(): void {
    this.logOutEmitter.emit(true);
  }

}
