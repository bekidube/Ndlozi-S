import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradestatsComponent } from './tradestats.component';

describe('TradestatsComponent', () => {
  let component: TradestatsComponent;
  let fixture: ComponentFixture<TradestatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradestatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
