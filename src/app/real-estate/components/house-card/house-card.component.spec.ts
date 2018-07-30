import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { House } from '../../models';
import { HouseCardComponent } from './house-card.component';
import { MatCardModule } from '@angular/material/card';
import { OnSaleStatePipe } from '../../pipes/on-sale-state/on-sale-state.pipe';
import { DebugElement } from '@angular/core';

describe('HouseCardComponent', () => {
  let component: HouseCardComponent;
  let fixture: ComponentFixture<HouseCardComponent>;

  let titleDe: DebugElement
  let titleEl: HTMLElement;
  let descriptionDe: DebugElement;
  let descriptionEl: HTMLElement;
  let imageDe: DebugElement;
  let imageEl: HTMLElement;
  let priceDe: DebugElement;
  let priceEl: HTMLElement;
  let onSaleDe: DebugElement;
  let onSaleEl: HTMLElement;

  let house:House = {
    id: 1,
    cityId: 1,
    onSale: true,
    price: 100,
    title: 'House 1',
    description: `
Labore consequat qui laboris velit aliquip ullamco Lorem consequat cupidatat consectetur laboris pariatur. Minim elit id officia eu ex culpa irure exercitation ad ullamco eu eiusmod. Culpa reprehenderit ad aliquip adipisicing sint voluptate eu adipisicing enim incididunt enim consectetur Lorem occaecat. Velit excepteur et incididunt occaecat mollit voluptate nostrud ex cupidatat qui exercitation id cupidatat. Eiusmod sit nostrud elit officia do. Dolore ullamco id qui quis sunt irure.
    `,
    image: 'http://via.placeholder.com/150x150'
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HouseCardComponent, OnSaleStatePipe],
      imports: [MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCardComponent);
    component = fixture.componentInstance;
    titleDe  = fixture.debugElement.query(By.css('.house-title'));
    titleEl = titleDe.nativeElement;
    descriptionDe  = fixture.debugElement.query(By.css('.house-description'));
    descriptionEl = descriptionDe.nativeElement;
    imageDe  = fixture.debugElement.query(By.css('.house-image'));
    imageEl = imageDe.nativeElement;
    priceDe  = fixture.debugElement.query(By.css('.house-price'));
    priceEl = priceDe.nativeElement;
    onSaleDe  = fixture.debugElement.query(By.css('.house-on-sale'));
    onSaleEl = onSaleDe.nativeElement;
    component.house = house;
    fixture.detectChanges();
  });

  // TODO(1pts)
  it('should render house title', () => {
    expect(titleEl.textContent).toEqual(house.title);
  });

  // TODO(1pts)
  it('should render card desription', () => {
    expect(descriptionEl.textContent).toBeDefined();
  });

  // TODO(1pts)
  it('should render card image', () => {
    expect(imageEl.textContent).toBeDefined();
  });

  // TODO(1pts)
  it('should render house price', () => {
    expect(priceEl.textContent).toBeDefined();
  });

  // TODO(1pts)
  it('should render house onSale if house is on sale', () => {
    expect(onSaleEl.textContent).toEqual(' OnSale! ');
  });

  // TODO(1pts)
  it('should NOT render house onSale if house is not on sale', () => {
    house.onSale = false;
    fixture.detectChanges();
    expect(onSaleEl.textContent).toEqual(' Not on sale.. ');
  });
});
