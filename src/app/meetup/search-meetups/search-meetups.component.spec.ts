import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMeetupsComponent } from './search-meetups.component';

describe('SearchMeetupsComponent', () => {
  let component: SearchMeetupsComponent;
  let fixture: ComponentFixture<SearchMeetupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMeetupsComponent]
    });
    fixture = TestBed.createComponent(SearchMeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
