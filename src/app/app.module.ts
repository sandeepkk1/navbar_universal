import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { InternshipComponent } from './pages/internship/internship.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { SeoComponent } from './pages/seo/seo.component';
import { ServiceComponent } from './pages/service/service.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TeamMemberComponent } from './pages/team-member/team-member.component';
import { ReviewComponent } from './pages/review/review.component';
import { ClientComponent } from './pages/client/client.component';
import { SkillComponent } from './pages/skill/skill.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PaymentComponent } from './pages/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    InternshipComponent,
    TechnologyComponent,
    MarketingComponent,
    SeoComponent,
    ServiceComponent,
    PortfolioComponent,
    PricingComponent,
    TeamMemberComponent,
    ReviewComponent,
    ClientComponent,
    SkillComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
