import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerdataComponent } from './serverdata.component';

describe('ServerdataComponent', () => {
  let component: ServerdataComponent;
  let fixture: ComponentFixture<ServerdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerdataComponent]
    });
    fixture = TestBed.createComponent(ServerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
