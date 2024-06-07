import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STreeviewComponent } from './s-treeview.component';

describe('STreeviewComponent', () => {
  let component: STreeviewComponent;
  let fixture: ComponentFixture<STreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [STreeviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(STreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
