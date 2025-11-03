import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  isFading = false;
  fadeColor: 'duo' | 'groupe' | null = null;

  constructor(private router: Router) {}

  jouer(mode: 'duo' | 'groupe') {
    this.fadeColor = mode;
    this.isFading = true;

    setTimeout(() => {
      this.router.navigate(['/game'], { queryParams: { mode } });
    }, 1000);
  }
}
