import { Component, input, output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {ionChevronDown, ionChevronUp} from '@ng-icons/ionicons'

type AccData = {
  id: number,
  isOpen: boolean,
  ques: string,
  ans: string
}[]

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  viewProviders: [provideIcons({ionChevronDown, ionChevronUp})]
})
export class AccordionComponent {
  accordionData = input.required<AccData>()
  selectedAccordion = output<number>()

  toggleAccordion(id: number){
		this.accordionData().map(item => {
			if(item.id === id){
				item.isOpen = !item.isOpen
			}
		})
	}
}
