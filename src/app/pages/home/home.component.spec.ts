import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/shared/components/global-header/global-header.component.spec.ts
import { GlobalHeaderComponent } from './global-header.component';

describe('GlobalHeaderComponent', () => {
  let component: GlobalHeaderComponent;
  let fixture: ComponentFixture<GlobalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalHeaderComponent ]
=======
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
>>>>>>> a60df13e14aa72011beceb8b251c5fd6819b6522:src/app/pages/home/home.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:src/app/shared/components/global-header/global-header.component.spec.ts
    fixture = TestBed.createComponent(GlobalHeaderComponent);
=======
    fixture = TestBed.createComponent(HomeComponent);
>>>>>>> a60df13e14aa72011beceb8b251c5fd6819b6522:src/app/pages/home/home.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
