import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { filterQueryId } from '@angular/core/src/view/util';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  public user: any;

  public userUuid;

  public dataStorage: User;
  public data;

  public name;


  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.dataStorage = JSON.parse(localStorage.getItem('user_data'));
    this.data = this.dataStorage;
    console.log('Resultado do data', this.data);
    this.userUuid = (this.router.snapshot.paramMap.get('uuid'));
    this.user = this.getUserById(this.userUuid);
    console.log('Resultado de getUserById', this.user);
    
  }
  
  public go() {
    console.log('Resultado de userUuid', this.userUuid);
  }

  public getUserById(id) {
    return JSON.parse(localStorage.getItem('user_data'))
      .filter(res => this.user === id)
}

}


