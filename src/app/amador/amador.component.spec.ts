import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadorComponent } from './amador.component';

describe('AmadorComponent', () => {
  let component: AmadorComponent;
  let fixture: ComponentFixture<AmadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
