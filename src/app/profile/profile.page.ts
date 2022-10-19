import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

profileId : string;
users;

  constructor(
    private ActivatedRoute:ActivatedRoute,
    private http:HttpClient
  ) {
    
   }

  ngOnInit() {
   this.profileId = this.ActivatedRoute.snapshot.paramMap.get('id')
   this.http.get('https://jsonplaceholder.typicode.com/users/'+ this.profileId)
   .subscribe(res => this.users = res);
   
  }

}
