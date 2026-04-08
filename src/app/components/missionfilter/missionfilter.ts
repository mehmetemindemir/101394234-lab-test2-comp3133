import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-missionfilter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './missionfilter.html',
  styleUrl: './missionfilter.css',
})
export class Missionfilter {
  protected readonly launchYear = signal('');
  readonly yearChange = output<string>();

  protected applyFilter(): void {
    this.yearChange.emit(this.launchYear().trim());
  }

  protected clearFilter(): void {
    this.launchYear.set('');
    this.yearChange.emit('');
  }
}
