import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LucideAngularModule } from 'lucide-angular/src/icons';
import { ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, LucideAngularModule],
  templateUrl: './home.component.html',

})
export class HomeComponent {
  readonly ArrowRight = ArrowRight;

}
