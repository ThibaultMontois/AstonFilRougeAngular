import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.scss']
})
export class teamcardsComponent implements OnInit {

  teamList!: User[];

  constructor(private db: DatabaseService) {
    this.teamList = [];
  }

  ngOnInit(): void {
    this.db.getUserList().subscribe((response: any) => {
      //console.log(response);
      let userList: User[] = response.userList;
      let i: number = 0;
      let t: number = 0;
      while (t < userList.length) {
        if (userList[i].role === 4 || userList[i].role === 2) {
          this.teamList.push(userList[i]);
          //console.log(userList[i]);
          t++;
        }
        i++;
        if(t==5){
          break;
        }
      }
    })
  }

}
