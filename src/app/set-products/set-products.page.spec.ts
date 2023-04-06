import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetProductsPage } from './set-products.page';

describe('SetProductsPage', () => {
  let component: SetProductsPage;
  let fixture: ComponentFixture<SetProductsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SetProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
