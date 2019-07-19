import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

import {OrdersRoutingModule} from './orders-routing.module';


@NgModule({
  imports: [ CommonModule, FormsModule, SharedModule, OrdersRoutingModule],
  declarations: [ ]
})
export class OrdersModule { }
