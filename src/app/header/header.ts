import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly links = [
    { label: 'Cosa faccio', target: '#lavoro' },
    { label: 'Percorso', target: '#percorso' },
    { label: 'Per conto mio', target: '#progetti' },
  ];
}
