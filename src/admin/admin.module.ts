import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminFaqsComponent } from './components/admin-faqs/admin-faqs.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminMenuComponent,
    AdminMessagesComponent,
    AdminFaqsComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
