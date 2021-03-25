import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KonfirmasiPage } from './konfirmasi.page';

describe('KonfirmasiPage', () => {
  let component: KonfirmasiPage;
  let fixture: ComponentFixture<KonfirmasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonfirmasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KonfirmasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
