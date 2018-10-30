import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosListagemComponent } from './lancamentos-listagem.component';

describe('LancamentosListagemComponent', () => {
  let component: LancamentosListagemComponent;
  let fixture: ComponentFixture<LancamentosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
