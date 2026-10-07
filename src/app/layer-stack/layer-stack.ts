import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-layer-stack',
  styleUrl: './layer-stack.scss',
  templateUrl: './layer-stack.html',
})
export class LayerStack {
  protected readonly platforms = [
    { name: 'iOS', language: 'Swift', tone: 'swift' },
    { name: 'Android', language: 'Kotlin', tone: 'kotlin' },
  ];
}
