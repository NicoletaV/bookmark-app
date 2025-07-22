import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookmarksComponent } from './add-bookmarks.component';

describe('AddBookmarksComponent', () => {
  let component: AddBookmarksComponent;
  let fixture: ComponentFixture<AddBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
