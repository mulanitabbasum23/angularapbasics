import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankapplicationformComponent } from './bankapplicationform.component';

describe('BankapplicationformComponent', () => {
  let component: BankapplicationformComponent;
  let fixture: ComponentFixture<BankapplicationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankapplicationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankapplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
