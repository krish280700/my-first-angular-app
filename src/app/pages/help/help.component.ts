import { Component, signal } from '@angular/core';
import { helpArticlesTag, articles } from '../../mock/header';
import { RouterLink, RouterOutlet } from "@angular/router";
@Component({
	selector: 'app-help',
	standalone: true,
	imports: [RouterLink,RouterOutlet],
	templateUrl: './help.component.html',
	styleUrl: './help.component.scss'
})
export class HelpComponent {
	helpArticlesTag = helpArticlesTag
	articles = articles
	activeMenu = signal<number>(1)

	updateActiveMenu(id:number){
		this.activeMenu.set(id)
	}
}
