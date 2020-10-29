import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsStationComponent } from './trains-station.component';

describe('TrainsStationComponent', () => {
  let component: TrainsStationComponent;
  let fixture: ComponentFixture<TrainsStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainsStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
