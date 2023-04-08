import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretkeyComponent } from './secretkey.component';

describe('SecretkeyComponent', () => {
  let component: SecretkeyComponent;
  let fixture: ComponentFixture<SecretkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretkeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
