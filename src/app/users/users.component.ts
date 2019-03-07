import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
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

  private userId = 10;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<User[]>(this.url).subscribe((response) => {
      this.users = response;
    });
  }


  onAddUser(name: string, userName: string, email: string) {
    this.httpClient.post<User>(this.url, {
      name: name,
      userName: userName,
      email: email,
      id: this.userId
    }).subscribe(user => {
      this.users.push(user);
    });
  }
}
