import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatExpansionModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { HousesFiltersComponent } from './components/houses-filters/houses-filters.component';
import { HousesListComponent } from './components/houses-list/houses-list.component';
import { HouseDetailsComponent } from './containers/house-details/house-details.component';
import { HouseListingsComponent } from './containers/house-listings/house-listings.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { OnSaleStatePipe } from './pipes/on-sale-state/on-sale-state.pipe';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatExpansionModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: HouseListingsComponent,
      },
      { path: ':id', component: HouseDetailsComponent }
    ])
  ],
  declarations: [
    HousesListComponent,
    HouseDetailsComponent,
    HousesFiltersComponent,
    HouseListingsComponent,
    HouseCardComponent,
    OnSaleStatePipe
  ]
})
export class RealEstateModule {}
