import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { SectionBlock } from './section-block/section-block';
import { WorkAreas } from './work-areas/work-areas';
import { Timeline } from './timeline/timeline';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  imports: [Header, Hero, SectionBlock, WorkAreas, Timeline, Projects, Contact, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
