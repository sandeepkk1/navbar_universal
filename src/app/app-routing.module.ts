import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InternshipComponent } from './pages/internship/internship.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { SeoComponent } from './pages/seo/seo.component';
import { ServiceComponent } from './pages/service/service.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TeamMemberComponent } from './pages/team-member/team-member.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path:"" , component:HomeComponent,
    
  },
  {
    path:"home" , component:HomeComponent,
    
  },
  {
    path:"internship" , component:InternshipComponent,
    
  },
  {
    path:"technology" , component:TechnologyComponent,
    
  },
  {
    path:"marketing" , component:MarketingComponent,
    
  },
  {
    path:"seo" , component:SeoComponent,
    
  },
  {
    path:"service" , component:ServiceComponent,
    
  },
  {
    path:"portfolio" , component:PortfolioComponent,
    
  },
  {
    path:"pricing" , component:PricingComponent,
    
  },
  {
    path:"team" , component:TeamMemberComponent,
    
  },
  {
    path:"about" , component:AboutComponent,
    
  },
  {
    path:"contact" , component:ContactComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
