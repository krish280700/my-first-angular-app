import { Component, signal, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { helpArticlesTag, articles } from '../../mock/mock';
import { RouterLink, RouterOutlet, ActivatedRoute, Route, Router, ActivationEnd} from "@angular/router";
import { filter, map } from 'rxjs';

@Component({
	selector: 'app-help',
	standalone: true,
	imports: [RouterLink,RouterOutlet, NgIf],
	templateUrl: './help.component.html',
	styleUrl: './help.component.scss'
})

export class HelpComponent {
	helpArticlesTag = helpArticlesTag
	articles = articles
	activeMenuId = signal<number>(1)
	activeMenu = signal<string>('Getting Started')
	activeArticle = signal<string>('')
	articleId!:string|null
	currentRoute:string|undefined = window.location.pathname

	private activatedRoute = inject(ActivatedRoute);
	private router = inject(Router)

	ngOnInit(){
		this.router.events.pipe(
			filter((event) => event instanceof ActivationEnd)
		).subscribe((event) => {
			let path = event.snapshot.routeConfig?.path
			this.currentRoute = window.location.pathname
			if(path !== 'help'){
				this.articleId = event.snapshot.paramMap.get('id')
			}
		});
		
	}
	
	updateActiveMenu(id:number, menu:string){
		this.activeMenuId.set(id)
		this.activeMenu.set(menu)
		this.activeArticle.set('')
		this.router.navigate(['/help'])
	}

	redirectBreadCrumb(){
		this.router.navigate(['/help'])
		this.activeArticle.set('')
	}
}
