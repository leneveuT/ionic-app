import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsulterChevalPage } from './consulter-cheval.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterChevalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsulterChevalPage]
})
export class ConsulterChevalPageModule {}
