import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPatternComponent } from './basic-pattern.component';

describe('BasicPatternComponent', () => {
  let component: BasicPatternComponent;
  let fixture: ComponentFixture<BasicPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPatternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
