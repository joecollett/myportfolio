import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTileComponent } from './work-tile.component';

describe('WorkTileComponent', () => {
  let component: WorkTileComponent;
  let fixture: ComponentFixture<WorkTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
