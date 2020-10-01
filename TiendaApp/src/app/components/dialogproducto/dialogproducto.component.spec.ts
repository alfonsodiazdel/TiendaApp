import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogproductoComponent } from './dialogproducto.component';

describe('DialogproductoComponent', () => {
  let component: DialogproductoComponent;
  let fixture: ComponentFixture<DialogproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
