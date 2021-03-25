import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailtransaksiPage } from './detailtransaksi.page';

describe('DetailtransaksiPage', () => {
  let component: DetailtransaksiPage;
  let fixture: ComponentFixture<DetailtransaksiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailtransaksiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailtransaksiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
