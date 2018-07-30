import { Component, Input } from '@angular/core';
import { House } from '../../models';
import { MatCardModule } from '@angular/material/card';
// TODO(5pts): render house

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent {
  @Input() house: House;
}
