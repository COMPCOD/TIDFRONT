import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PontoPage } from './ponto.page';

describe('PontoPage', () => {
  let component: PontoPage;
  let fixture: ComponentFixture<PontoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PontoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
