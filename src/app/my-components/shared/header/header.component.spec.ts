import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { //tsest Se o componente foi criado
    expect(component).toBeTruthy();
  });

  it('(U) test if dheader has a titleheader attribute and if it starts with "default merchan"', ()=>{
    expect(component.titleHeader).toEqual("default merchan");
  });

});
