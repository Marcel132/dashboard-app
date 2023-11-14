import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { BasicPatternComponent } from './components/basic-pattern/basic-pattern.component'

const routes: Routes = [
  {path: '', component: BasicPatternComponent}
]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BasicPatternComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog-app';
}
