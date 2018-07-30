import { Component, Input } from '@angular/core';
import { House } from '../../models';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

/* TODO(5pts): render houses list */
@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.scss']
})
export class HousesListComponent {
  @Input() houses: House[];
  displayedColumns: string[] = ['id', 'title', 'price', 'onSale'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router){
  }
}
