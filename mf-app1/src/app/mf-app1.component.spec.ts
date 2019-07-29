import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MfApp1Component } from "./mf-app1.component";


describe('SenderComponent', () => {
  let component: MfApp1Component;
  let fixture: ComponentFixture<MfApp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfApp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
