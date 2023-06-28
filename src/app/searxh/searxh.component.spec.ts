import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearxhComponent } from './searxh.component';

describe('SearxhComponent', () => {
  let component: SearxhComponent;
  let fixture: ComponentFixture<SearxhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearxhComponent]
    });
    fixture = TestBed.createComponent(SearxhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
