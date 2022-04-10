import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public items!: Club[];

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.db.getClubList().subscribe((data: Club[]) => {
      this.items = data;
    })
  }

}
