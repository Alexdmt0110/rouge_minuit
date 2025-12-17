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
    this.isFading = true;

    setTimeout(() => {

      if (mode === 'duo') {
        this.router.navigate(['/duo']);
        return;
      }

      if (mode === 'groupe') {
        this.router.navigate(['/groupe']);
        return;
      }

    }, 600);
  }

}
