import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@ngx-config/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(private readonly config: ConfigService) { }

  ngOnInit() {
    this.title = this.config.getSettings().applicationName;
  }

}
