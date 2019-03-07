import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private url: string = 'https://jsonplaceholder.typicode.com/users';

  public users: User[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<User[]>(this.url).subscribe((response) => {
      this.users = response;
    })
  }
}
