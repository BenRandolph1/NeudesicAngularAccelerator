import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@ngx-config/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public userName:string;
  constructor() { }

  ngOnInit() {
    this.userName = "Joe User";
  }

}
