import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KMIcalcualtorComponent } from './components/kmicalcualtor/kmicalcualtor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KMIcalcualtorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KMI_skaiciuokle';
}
