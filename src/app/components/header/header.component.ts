import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthUser } from 'src/app/models/auth-user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() authUser!: AuthUser | null;
  @Output() logOutEmitter: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.logOutEmitter.emit(true);
  }

}
