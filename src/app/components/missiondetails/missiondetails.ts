import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Mission } from '../../models/mission';
import { SpacexService } from '../../services/spacex';

@Component({
  selector: 'app-missiondetails',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule],
  templateUrl: './missiondetails.html',
  styleUrl: './missiondetails.css',
})
export class Missiondetails implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly spacexService = inject(SpacexService);

  protected readonly mission = signal<Mission | null>(null);
  protected readonly error = signal<string | null>(null);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.error.set('Invalid mission id.');
      return;
    }

    this.spacexService.getMissionDetails(id).subscribe({
      next: (data) => {
        this.mission.set(data);
      },
      error: () => {
        this.error.set('Could not load mission details.');
      },
    });
  }
}
