import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users/users.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // public user: User = {
  //   name: '',
  //   username: '',
  //   id: null,
  //   email: ''
  // };

  public user: Observable<User>;

  private urlUserById = 'https://jsonplaceholder.typicode.com/users'

  constructor
  (
    private activatedRouter: ActivatedRoute,
    private httpClient: HttpClient
) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      // return 
      this.user = this.httpClient
      .get<User>(`${this.urlUserById}/${params.id}`);
      // .subscribe(response => {
      //   this.user = response;
      // })
    })
  }

}
