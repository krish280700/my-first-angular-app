import { Component } from '@angular/core';
import { ProductComponent } from '../../pages/product/product.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

}
