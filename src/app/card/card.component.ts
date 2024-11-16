import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string;
  @Input() username: string;
  @Input() content: string;
  @Input() imageUrl: string;

  constructor() { 
    this.title = '';
    this.username = '';
    this.content = '';
    this.imageUrl = '';
  }
}
