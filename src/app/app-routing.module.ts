import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, AdminComponent, ContactComponent, HomeComponent, ServicesComponent } from '../app/components/index';
import { FaqsComponent } from './components/faqs/faqs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'FAQs', component: FaqsComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
