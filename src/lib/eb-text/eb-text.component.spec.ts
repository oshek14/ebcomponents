import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbTextComponent } from './eb-text.component';

describe('EbTextComponent', () => {
  let component: EbTextComponent;
  let fixture: ComponentFixture<EbTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
