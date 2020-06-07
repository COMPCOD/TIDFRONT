import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FluxoPage } from './fluxo.page';

describe('FluxoPage', () => {
  let component: FluxoPage;
  let fixture: ComponentFixture<FluxoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FluxoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
