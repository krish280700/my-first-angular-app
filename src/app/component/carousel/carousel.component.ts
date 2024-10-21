import { Component, input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
	selector: 'app-carousel',
	standalone: true,
	imports: [SlickCarouselModule],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
	content = input<any>()
	section = input<string>()
	slideConfig = {
		"slidesToShow": 1,
		"slidesToScroll": 1,
		"dots": true,
		"autoplay": true,
		"autoplaySpeed": 5000,
		"infinite": true
	};
}
