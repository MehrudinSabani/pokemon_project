import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPokeComponent } from './edit-poke.component';

describe('EditPokeComponent', () => {
  let component: EditPokeComponent;
  let fixture: ComponentFixture<EditPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
