import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BantuanPage } from './bantuan.page';

describe('BantuanPage', () => {
  let component: BantuanPage;
  let fixture: ComponentFixture<BantuanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BantuanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BantuanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
