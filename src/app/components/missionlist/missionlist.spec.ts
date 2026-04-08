import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Missionlist } from './missionlist';
import { SpacexService } from '../../services/spacex';

describe('Missionlist', () => {
  let component: Missionlist;
  let fixture: ComponentFixture<Missionlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Missionlist],
      providers: [
        {
          provide: SpacexService,
          useValue: {
            getMissions: () => of([]),
            getMissionsByYear: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Missionlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
