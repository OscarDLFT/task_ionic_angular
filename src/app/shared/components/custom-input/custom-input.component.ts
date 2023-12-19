import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent  implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() autocomplete: string;

  isPasword: boolean = false;
  hide: boolean = true;

  //GETS 
  get _showIconEye(): string {
    return this.hide ? 'eye-outline' : 'eye-off-outline';
  }
  constructor() { }

  ngOnInit() {
    if (this.type === 'password') {this.isPasword = true}
  }

  showOrHiddePassword(): void {
    this.hide = !this.hide;
    if (this.hide) {
      this.type = 'password';
    } else {
      this.type = 'text';
    }
  }

}
