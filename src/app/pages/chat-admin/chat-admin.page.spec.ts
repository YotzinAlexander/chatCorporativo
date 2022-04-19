import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAdminPage } from './chat-admin.page';

describe('ChatAdminPage', () => {
  let component: ChatAdminPage;
  let fixture: ComponentFixture<ChatAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
