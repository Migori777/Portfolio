import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { SectionBlock } from './section-block/section-block';
import { WorkAreas } from './work-areas/work-areas';

@Component({
  imports: [Header, Hero, SectionBlock, WorkAreas],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
