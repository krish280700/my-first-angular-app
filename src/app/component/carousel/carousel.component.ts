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
		"dots": false,
		"autoplay": true,
		"autoplaySpeed": 3000,
		"infinite": true,
		"arrows": false
	};
}
