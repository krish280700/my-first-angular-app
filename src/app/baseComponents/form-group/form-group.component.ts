import { Component,input, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

type input = {
	type: string,
	id: number,
	fieldId: string,
	placeholder: string,
	value: any,
	class: string,
}[]

@Component({
	selector: 'app-form-group',
	standalone: true,
	imports: [FormsModule, ButtonComponent],
	templateUrl: './form-group.component.html',
	styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
	@Input() inputDatas!:input

	onSubmit(form: NgForm) {
		let formValue = form.form.value
		console.log(form)
		if(formValue.name && formValue.mail )
			alert(`Thank you for submitting contact form. We'll reach you soon ${formValue.name}`)
		else{
			alert(`Please fill out the form`)
		}
	  }
}
