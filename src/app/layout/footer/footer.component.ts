import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {ionLogoInstagram, ionLogoFacebook, ionLogoLinkedin, ionLogoX} from '@ng-icons/ionicons'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [provideIcons({ionLogoInstagram, ionLogoFacebook, ionLogoLinkedin, ionLogoX})]
})
export class FooterComponent {

}
