import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'logbook';
  dt:Date | undefined;

  ngOnInit(): void {
    this.dt = new Date();
  }

}
