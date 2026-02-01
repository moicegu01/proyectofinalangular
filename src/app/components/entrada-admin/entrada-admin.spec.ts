import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaAdmin } from './entrada-admin';

describe('EntradaAdmin', () => {
  let component: EntradaAdmin;
  let fixture: ComponentFixture<EntradaAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
