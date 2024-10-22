import { Component } from '@angular/core';
import { InputComponent } from '../../baseComponents/input/input.component';
import { ButtonComponent } from '../../baseComponents/button/button.component';
import { inputFields } from '../../mock/header';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  inputFields = inputFields
}
