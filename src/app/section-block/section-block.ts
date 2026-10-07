import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-block',
  styleUrl: './section-block.scss',
  templateUrl: './section-block.html',
})
export class SectionBlock {
  readonly anchor = input.required<string>();
  readonly heading = input.required<string>();
  readonly intro = input<string>();
}
