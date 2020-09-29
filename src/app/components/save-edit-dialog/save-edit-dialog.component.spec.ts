import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEditDialogComponent } from './save-edit-dialog.component';

describe('SaveEditDialogComponent', () => {
  let component: SaveEditDialogComponent;
  let fixture: ComponentFixture<SaveEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
