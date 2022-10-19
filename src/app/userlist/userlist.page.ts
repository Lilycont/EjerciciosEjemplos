import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {

  user:any [] = []

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      console.log(res)
      this.user = res;

    }, e => {
      console.log(e);
    }

    )
  }

}
