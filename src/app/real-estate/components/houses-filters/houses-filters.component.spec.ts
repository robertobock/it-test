import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';
import { HousesFiltersComponent } from './houses-filters.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import {
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatExpansionModule,
  MatButtonModule,
  MatGridListModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HousesFiltersComponent', () => {
  let component: HousesFiltersComponent;
  let fixture: ComponentFixture<HousesFiltersComponent>;
  let cityIdDe: DebugElement
  let cityIdEl: HTMLElement;
  let priceLessThanDe: DebugElement;
  let priceLessThanEl: HTMLElement;
  let onSaleDe: DebugElement;
  let onSaleEl: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HousesFiltersComponent],
      imports: [
        NgSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatRadioModule,
        MatExpansionModule,
        MatButtonModule,
        MatGridListModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesFiltersComponent);
    component = fixture.componentInstance;
    cityIdDe  = fixture.debugElement.query(By.css('.filter-cities'));
    cityIdEl = cityIdDe.nativeElement;
    priceLessThanDe  = fixture.debugElement.query(By.css('.filter-price-less-than'));
    priceLessThanEl = priceLessThanDe.nativeElement;
    onSaleDe  = fixture.debugElement.query(By.css('.filter-on-sale'));
    onSaleEl = onSaleDe.nativeElement;
    fixture.detectChanges();
  });

  it('should create filters form', () => {
    expect(component.form instanceof FormGroup).toEqual(true);
  });

  // TODO(1pts)
  it('form should have cityId control', () => {
    expect(component.form.controls['cityId'] instanceof FormControl).toBe(true);
  });

  // TODO(1pts)
  it('should render cityId control', () => {
    expect(cityIdEl.textContent).toBeDefined();
  });

  // TODO(1pts)
  it('form should have priceLessThan control', () => {
    expect(component.form.controls['priceLessThan'] instanceof FormControl).toBe(true);
  });

  // TODO(1pts)
  it('should render priceLessThan control', () => {
    expect(priceLessThanEl.textContent).toBeDefined();
  });

  // TODO(1pts)
  it('form should have onSale control', () => {
    expect(component.form.controls['onSale'] instanceof FormControl).toBe(true);
  });

  // TODO(1pts)
  it('should render onSale control', () => {
    expect(onSaleEl.textContent).toBeDefined();
  });
});
