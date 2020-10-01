import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogproductoAgregarComponent } from './dialogproducto-agregar.component';

describe('DialogproductoAgregarComponent', () => {
  let component: DialogproductoAgregarComponent;
  let fixture: ComponentFixture<DialogproductoAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogproductoAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogproductoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
