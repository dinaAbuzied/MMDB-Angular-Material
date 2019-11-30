import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchBarComponent } from './header-search-bar.component';

describe('HeaderSearchBarComponent', () => {
  let component: HeaderSearchBarComponent;
  let fixture: ComponentFixture<HeaderSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
