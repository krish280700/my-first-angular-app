import { Component, input } from '@angular/core';

interface Btn {
	id: string | number;
	name: string;
	className: string;	
}

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss'
})
export class ButtonComponent {
	btnData = input<Btn>()
}
