import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMIcalcualtorComponent } from './kmicalcualtor.component';

describe('KMIcalcualtorComponent', () => {
  let component: KMIcalcualtorComponent;
  let fixture: ComponentFixture<KMIcalcualtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KMIcalcualtorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KMIcalcualtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
