import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenviaGrupoPage } from './reenvia-grupo.page';

describe('ReenviaGrupoPage', () => {
  let component: ReenviaGrupoPage;
  let fixture: ComponentFixture<ReenviaGrupoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReenviaGrupoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReenviaGrupoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
