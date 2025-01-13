import { Component } from '@angular/core';
import { CardComponent } from '../../component/card/card.component';
import { ButtonComponent } from "../../baseComponents/button/button.component";
import { CarouselComponent } from '../../component/carousel/carousel.component';
import { testimonials, problemContent, solutionContent } from '../../mock/mock';
@Component({
	selector: 'app-product',
	standalone: true,
	imports: [CardComponent, ButtonComponent, CarouselComponent],
	templateUrl: './product.component.html',
	styleUrl: './product.component.scss'
})
export class ProductComponent {
	
	testimonials = testimonials
	problemContent = problemContent
	solutionContent = solutionContent

}
