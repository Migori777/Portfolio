import { Component } from '@angular/core';
import { PROFILE } from '../data/profile';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly profile = PROFILE
}
