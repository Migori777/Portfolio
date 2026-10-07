import { Component } from '@angular/core';
import { TIMELINE } from '../data/profile';

@Component({
  imports: [],
  selector: 'app-timeline',
  styleUrl: './timeline.scss',
  templateUrl: './timeline.html',
})
export class Timeline {
  protected readonly items = TIMELINE;
}
