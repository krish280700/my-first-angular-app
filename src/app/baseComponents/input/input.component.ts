import { Component, input } from '@angular/core';

interface Input{
	type: string,
	id: number,
	fieldId: string,
	placeholder: string,
	value: any,
	class: string,
}

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [],
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss'
})
export class InputComponent {
	fieldData = input<Input>()
}
