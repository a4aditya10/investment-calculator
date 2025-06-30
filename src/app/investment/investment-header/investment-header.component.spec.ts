import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentHeaderComponent } from './investment-header.component';

describe('InvestmentHeaderComponent', () => {
  let component: InvestmentHeaderComponent;
  let fixture: ComponentFixture<InvestmentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
