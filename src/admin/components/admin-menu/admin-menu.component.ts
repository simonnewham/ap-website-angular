import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/shared/models/menu-item';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {Label: 'Home', Route: ''},
    {Label: 'Messages', Route: 'Messages'},
    {Label: 'FAQs', Route: 'FAQs'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMenuItemSelect(menuItem: MenuItem){
    this.router.navigate([`Admin2/${menuItem.Route}`]);
  }
}
