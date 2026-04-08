import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Mission } from '../../models/mission';
import { SpacexService } from '../../services/spacex';
import { Missionfilter } from '../missionfilter/missionfilter';

@Component({
  selector: 'app-missionlist',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    Missionfilter,
  ],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css',
})
export class Missionlist implements OnInit {
  private readonly spacexService = inject(SpacexService);

  protected readonly missions = signal<Mission[]>([]);
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly selectedYear = signal('');

  ngOnInit() {
    this.loadMissions();
  }

  protected onYearChange(year: string): void {
    this.selectedYear.set(year);
    this.loadMissions(year);
  }

  private loadMissions(year = ''): void {
    this.loading.set(true);
    this.error.set(null);

    const request$ = year
      ? this.spacexService.getMissionsByYear(year)
      : this.spacexService.getMissions();

    request$.subscribe({
      next: (data) => {
        this.missions.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not load missions. Please try again.');
        this.missions.set([]);
        this.loading.set(false);
      },
    });
  }
}