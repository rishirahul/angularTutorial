import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IopropertyComponent } from './ioproperty.component';

describe('IopropertyComponent', () => {
  let component: IopropertyComponent;
  let fixture: ComponentFixture<IopropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IopropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IopropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
