import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalistAccountComponent } from './journalist-account.component';

describe('JournalistAccountComponent', () => {
  let component: JournalistAccountComponent;
  let fixture: ComponentFixture<JournalistAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalistAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalistAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
