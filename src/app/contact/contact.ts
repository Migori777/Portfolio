import { Component, signal } from '@angular/core';
import { CONTACT } from '../data/profile';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly contact = CONTACT;
  protected readonly copied = signal(false);

  protected async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText(this.contact.email);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
