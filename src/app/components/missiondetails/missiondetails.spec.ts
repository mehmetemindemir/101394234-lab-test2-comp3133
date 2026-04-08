import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Missiondetails } from './missiondetails';
import { SpacexService } from '../../services/spacex';

describe('Missiondetails', () => {
  let component: Missiondetails;
  let fixture: ComponentFixture<Missiondetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Missiondetails],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1',
              },
            },
          },
        },
        {
          provide: SpacexService,
          useValue: {
            getMissionDetails: () =>
              of({
                flight_number: 1,
                mission_name: 'Mock Mission',
                launch_year: '2006',
                details: 'Mock details',
                links: {
                  mission_patch_small: null,
                  article_link: null,
                  wikipedia: null,
                  video_link: null,
                },
                rocket: {
                  rocket_name: 'Falcon 1',
                  rocket_type: 'Merlin A',
                },
              }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Missiondetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
