import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KomisiPage } from './komisi.page';

describe('KomisiPage', () => {
  let component: KomisiPage;
  let fixture: ComponentFixture<KomisiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomisiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KomisiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
