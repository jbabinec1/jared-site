import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSiteContainerComponent } from './main-site-container.component';

describe('MainSiteContainerComponent', () => {
  let component: MainSiteContainerComponent;
  let fixture: ComponentFixture<MainSiteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSiteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSiteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
