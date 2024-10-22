import { Component } from '@angular/core';
import { ProductComponent } from '../../pages/product/product.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

}
