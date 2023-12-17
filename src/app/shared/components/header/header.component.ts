import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title: string = '';
  @Input() backButton: string = '';
  @Input() isModal: boolean = false;
  @Input() color: string = '';
  @Input() centerTitle: boolean = false;

  //GETS
  /** Indicamos el color del toolbar header dependiendo si tiene o no valor el input */
  get colorHeader(): string {
    return this.color ? this.color : 'primary';
  }

  darkMode: boolean = false;

  constructor() { }

  ngOnInit() {}

  setTheme(darkMode: boolean): void {
    this.darkMode = darkMode;
  }

}
