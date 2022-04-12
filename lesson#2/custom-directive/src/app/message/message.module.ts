import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MessageComponent } from './message.component';
import {ClickDirectiveDirective} from '../click-directive.directive';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [MessageComponent, ClickDirectiveDirective],
  exports: [MessageComponent]
})
export class MessageComponentModule {}
