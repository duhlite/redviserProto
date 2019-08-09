import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProgramComponent } from './about-program.component';

describe('AboutProgramComponent', () => {
  let component: AboutProgramComponent;
  let fixture: ComponentFixture<AboutProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
