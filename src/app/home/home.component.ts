import { MenuService } from './../services/menu.service';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('main') main: any;
  constructor(private render: Renderer2, public menuService: MenuService) { }

  ngOnInit(): void {
    setInterval(() => {
      if(!this.menuService.closeMenu) {
       this.render.setStyle(this.main.nativeElement, 'opacity', '0.2');
      } else {
       this.render.setStyle(this.main.nativeElement, 'opacity', '1');
      }
    }, 10)
  }

}
