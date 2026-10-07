import { Component } from '@angular/core';
import { PROFILE } from '../data/profile';
import { LayerStack } from '../layer-stack/layer-stack';

@Component({
  imports: [LayerStack],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly profile = PROFILE;
}
