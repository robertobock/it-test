import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { City, HouseFilters } from '../../models';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

/* TODO(5pts): create form controls */
/* TODO(5pts): render form */

@Component({
  selector: 'app-houses-filters',
  templateUrl: './houses-filters.component.html',
  styleUrls: ['./houses-filters.component.scss']
})
export class HousesFiltersComponent {
  @Output() filtersChange = new EventEmitter<HouseFilters>();

  @Input()
  set filters(v: HouseFilters) {
     this.form.patchValue(v || {});
  }
  @Input() cities: City[];

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      cityId: [],
      priceLessThan: [],
      onSale: []
    });
  }

  ngOnInit() {
    
  }

  private checkValues(params:any){
    let _params:HouseFilters = {};
    if(params.cityId!=null){
      if(params.cityId.id!==0){
        _params.cityId=params.cityId.id;
      }
    }
    if(params.priceLessThan!=null){
      _params.priceLessThan = params.priceLessThan;
    }
    if(params.onSale!=null){
      _params.onSale = params.onSale;
    }
    return _params;
  }

  onSubmit() {
    this.filtersChange.emit(this.checkValues(this.form.value));
  }
}
