import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * 
   */
  public user = {} as User;
  public users: User[];

  public dataStorage: User;


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadAllUser();

  }

  public onSelect(user) {
    this.router.navigate(['/detalhes', user.login.uuid]);
  }
  
  public loadAllUser() {
    return this.userService.getAllUser()
      .subscribe((users: User[]) => {
        this.users = users
        window.localStorage.setItem('user_data', JSON.stringify(this.users));
      });
  }

 

}
