import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  users: any;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    // Simulating Server Call
    // response will be coming after 5 Sec
    setTimeout(() => {
      this.users = [
        { id: 1, name: 'Sam' },
        { id: 2, name: 'Bam' },
        { id: 3, name: 'Cam' },
        { id: 4, name: 'Dam' },
      ];
    }, 5000);
  }
}
