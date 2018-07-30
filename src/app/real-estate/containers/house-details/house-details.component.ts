import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HousesService } from '../../apis/houses.service';
import { House } from '../../models';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  house$: Observable<House>;

  constructor(
    private route: ActivatedRoute,
    private houseAPI: HousesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
       this.house$ = this.houseAPI.getHouse(parseInt(<string>params.get('id')))});
    /* TODO(3pts)
      Goal: fetch house based on the activated route's :id
    */
  }
}
