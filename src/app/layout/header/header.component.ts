import { Component, input, signal } from "@angular/core";
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

    onProductHover(){
        const productHovered = this.isProductHover()
        this.isProductHover.set(true)
    }

    onProductOut(){
        this.isProductHover.set(false)
    }
}