import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailprodukPage } from './detailproduk.page';

describe('DetailprodukPage', () => {
  let component: DetailprodukPage;
  let fixture: ComponentFixture<DetailprodukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailprodukPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailprodukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
