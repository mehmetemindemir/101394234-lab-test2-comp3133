import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  private readonly http = inject(HttpClient);
  private readonly api = 'https://api.spacexdata.com/v3/launches';

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.api).pipe(
      tap((missions) => console.log('SpaceX missions response:', missions))
    );
  }

  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.api}?launch_year=${year}`).pipe(
      tap((missions) =>
        console.log(`SpaceX missions response for year ${year}:`, missions)
      )
    );
  }

  getMissionDetails(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.api}/${flightNumber}`).pipe(
      tap((mission) =>
        console.log(`SpaceX mission details response for ${flightNumber}:`, mission)
      )
    );
  }
}
