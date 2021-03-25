import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tabs5Page } from './tabs5.page';

describe('Tabs5Page', () => {
  let component: Tabs5Page;
  let fixture: ComponentFixture<Tabs5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabs5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
