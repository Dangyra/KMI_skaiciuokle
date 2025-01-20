import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-kmicalcualtor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kmicalcualtor.component.html',
  styleUrl: './kmicalcualtor.component.css'
})
export class KMIcalcualtorComponent {
  public ugis=0;
  public svoris=0;
  public rezultatas="";

  public skaiciuoti(){
    this.rezultatas="Jūsų KMI: " + (this.svoris / ((this.ugis / 100) * (this.ugis / 100)));
  }

}
