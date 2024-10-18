import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEquiposComponentComponent } from './lista-equipos-component.component';

describe('ListaEquiposComponentComponent', () => {
  let component: ListaEquiposComponentComponent;
  let fixture: ComponentFixture<ListaEquiposComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEquiposComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEquiposComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
