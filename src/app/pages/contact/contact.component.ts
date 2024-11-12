import { Component } from '@angular/core';
import { FormGroupComponent } from '../../baseComponents/form-group/form-group.component';
import { inputFields } from '../../mock/header';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormGroupComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  inputFields = inputFields
}
