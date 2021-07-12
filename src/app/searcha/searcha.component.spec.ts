import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchaComponent } from './searcha.component';

describe('SearchaComponent', () => {
  let component: SearchaComponent;
  let fixture: ComponentFixture<SearchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
