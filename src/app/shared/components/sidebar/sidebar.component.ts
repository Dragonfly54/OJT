//* sidebar.component.ts
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isOpen: boolean = false;
  isSubMenuVisible: { [key: string]: boolean } = {};

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  toggleSubMenu(menuKey: string): void {
    for (let key in this.isSubMenuVisible) {
      if (key !== menuKey) {
        this.isSubMenuVisible[key] = false;
      }
    }
    if (this.isSubMenuVisible.hasOwnProperty(menuKey)) {
      this.isSubMenuVisible[menuKey] = !this.isSubMenuVisible[menuKey];
    } else {
      this.isSubMenuVisible[menuKey] = true;
    }
  }

  ngOnInit(): void {}
}
