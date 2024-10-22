import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: "",
        component: ProductComponent
    },
    {
        path: "pricing",
        component: PricingComponent
    },
    {
        path: "help",
        component: HelpComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },

];
