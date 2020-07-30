import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  public user: any;

  public userUuid;

  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.userUuid = (this.router.snapshot.paramMap.get('uuid'));
    this.detalharUser(this.userUuid);
  }
  
  
  public detalharUser(uuid: string) {
    this.userService.getUserByUuid(uuid)
      .subscribe((res) => {
        this.user = res;
    }
      )
    
  }

}


