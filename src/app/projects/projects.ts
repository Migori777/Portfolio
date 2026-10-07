import { Component } from '@angular/core';
import { PROJECTS } from '../data/profile';
import { ProjectCard } from '../project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
