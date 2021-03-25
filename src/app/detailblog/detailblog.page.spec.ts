import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailblogPage } from './detailblog.page';

describe('DetailblogPage', () => {
  let component: DetailblogPage;
  let fixture: ComponentFixture<DetailblogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailblogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailblogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
