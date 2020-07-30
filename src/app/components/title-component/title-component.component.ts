import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-title-component',
  template: `<h3 class="card-title"> {{label}}</h3>`,
  styleUrls: ['./title-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponentComponent implements OnInit {

  @Input() public label = 'teste';
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
