import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaculdadePage } from './faculdade.page';

describe('FaculdadePage', () => {
  let component: FaculdadePage;
  let fixture: ComponentFixture<FaculdadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaculdadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaculdadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
