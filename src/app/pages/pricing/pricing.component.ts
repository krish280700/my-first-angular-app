import { Component,signal } from '@angular/core';

import { pricingOptions, testimonials, pricingFAQ } from '../../mock/header';

import { ButtonComponent } from '../../baseComponents/button/button.component';
import { AccordionComponent } from '../../component/accordion/accordion.component';
import { CarouselComponent } from '../../component/carousel/carousel.component';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {ionCheckmarkSharp} from "@ng-icons/ionicons"

@Component({
	selector: 'app-pricing',
	standalone: true,
	imports: [ButtonComponent, NgIconComponent, AccordionComponent, CarouselComponent],
	templateUrl: './pricing.component.html',
	styleUrl: './pricing.component.scss',
	viewProviders: [provideIcons({ionCheckmarkSharp})]
})
export class PricingComponent {
	pricingData = pricingOptions
	testimonials = testimonials
	pricingFaq = pricingFAQ

}
