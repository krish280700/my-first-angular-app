import { Component, ElementRef, HostListener, signal, ViewChild } from "@angular/core";
import { menuData } from "../../mock/header";
import { ButtonComponent } from "../../baseComponents/button/button.component";
import { RouterLink } from "@angular/router";
@Component({
    selector:'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports:[ButtonComponent, RouterLink]
})

export class HeaderComponent{
    isProductHover = signal<boolean>(false)
    isSticky = signal<boolean>(true)
    isHamBurgerVisible = window.innerWidth < 1020
    isToggle = signal<boolean>(false)

    menuData = menuData
    
    @HostListener('window:scroll', [])
    onWindowScroll() {
        // Add sticky class after scrolling 100px
        this.isSticky.set(window.pageYOffset > 50)
    }

    toggleHamBurger(){
        this.isToggle.set(!this.isToggle())
    }
    
}