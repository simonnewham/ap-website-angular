import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminFaqsComponent } from './components/admin-faqs/admin-faqs.component';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';

const routes: Routes = [
  { path: '', component: AdminHomeComponent },
  { path: 'Messages', component: AdminMessagesComponent },
  { path: 'FAQs', component: AdminFaqsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
