import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    { title: 'Neat Tree', username: 'nature', content: 'I saw this neat tree today', imageUrl: '/tree.jpeg' },
    { title: 'Snowy Mountain', username: 'mountainlover', content: 'Here is a picture of a snowy mountain', imageUrl: '/mountain.jpeg' },
    { title: 'Mountain Biking', username: 'biking12222', content: 'I did some biking today', imageUrl: '/biking.jpeg' }
  ]


  
}
