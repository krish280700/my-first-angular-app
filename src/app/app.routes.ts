import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticleComponent } from './pages/article/article.component';

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
        component: HelpComponent,
        children:[
            {
                path: "article/:id",
                component: ArticleComponent
            }
        ]
    },
    {
        path: "contact",
        component: ContactComponent
    },

];
