import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioComponent } from './biblio.component';

describe('BiblioComponent', () => {
  let component: BiblioComponent;
  let fixture: ComponentFixture<BiblioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiblioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiblioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
