import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HousesListComponent } from './houses-list.component';
import { MatTableModule } from '@angular/material';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { HouseListingsComponent } from "../../containers/house-listings/house-listings.component";
import { HouseDetailsComponent } from "../../containers/house-details/house-details.component";
describe('HousesListComponent', () => {
  let component: HousesListComponent;
  let fixture: ComponentFixture<HousesListComponent>;
  let location: Location;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HousesListComponent
      ],
      imports: [
        MatTableModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO(3pts)
  it('should render list of houses', () => {
    
  });
});
