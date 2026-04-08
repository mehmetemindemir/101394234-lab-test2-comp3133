import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { SpacexService } from './spacex';

describe('SpacexService', () => {
  let service: SpacexService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(SpacexService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should request all missions', () => {
    service.getMissions().subscribe();

    const req = httpMock.expectOne('https://api.spacexdata.com/v3/launches');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should request missions by launch year', () => {
    service.getMissionsByYear('2018').subscribe();

    const req = httpMock.expectOne(
      'https://api.spacexdata.com/v3/launches?launch_year=2018'
    );
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should request mission details by flight number', () => {
    service.getMissionDetails(1).subscribe();

    const req = httpMock.expectOne('https://api.spacexdata.com/v3/launches/1');
    expect(req.request.method).toBe('GET');
    req.flush({});
  });
});