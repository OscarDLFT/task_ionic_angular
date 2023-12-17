import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

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

  darkMode: BehaviorSubject<boolean> | any;

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    this.darkMode = this.themeService.darkMode;
  }

  setTheme(darkMode: boolean): void {
    this.themeService.setTheme(darkMode);
  }

}
