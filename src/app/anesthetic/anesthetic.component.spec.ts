import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnestheticComponent } from './anesthetic.component';

describe('AnestheticComponent', () => {
  let component: AnestheticComponent;
  let fixture: ComponentFixture<AnestheticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnestheticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnestheticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
