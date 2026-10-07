import { Component } from '@angular/core';
import { WORK_AREAS } from '../data/profile';

@Component({
  imports: [],
  selector: 'app-work-areas',
  styleUrl: './work-areas.scss',
  templateUrl: './work-areas.html',
})
export class WorkAreas {
  protected readonly areas = WORK_AREAS
}
