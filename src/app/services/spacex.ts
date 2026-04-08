import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  private readonly http = inject(HttpClient);
  private readonly api = 'https://api.spacexdata.com/v3/launches';

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.api);
  }

  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.api}?launch_year=${year}`);
  }

  getMissionDetails(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.api}/${flightNumber}`);
  }
}
