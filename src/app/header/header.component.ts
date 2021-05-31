import { MenuService } from './../services/menu.service';
import { Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private render: Renderer2, public menuService: MenuService ) { }

  ngOnInit(): void {
  }

  onClickHamburger() {
    this.menuService.closeMenu = false;
  }

  onClickClose() {
    this.menuService.closeMenu = true;
  }
}
