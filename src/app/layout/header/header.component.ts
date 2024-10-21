import { Component, ElementRef, HostListener, signal, ViewChild } from "@angular/core";
import { menuData } from "../../mock/header";
import { ButtonComponent } from "../../baseComponents/button/button.component";
@Component({
    selector:'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports:[ButtonComponent]
})

export class HeaderComponent{
    isProductHover = signal<boolean>(false)
    menuData = menuData
    // @ViewChild('header') headerContainer!: ElementRef
    // @HostListener('document:scroll', ['$event'])

    onProductHover(){
        const productHovered = this.isProductHover()
        this.isProductHover.set(true)
    }

    onProductOut(){
        this.isProductHover.set(false)
    }

    // onMouseScroll(e){
    //     console.log(e, 'event')
    // }
}