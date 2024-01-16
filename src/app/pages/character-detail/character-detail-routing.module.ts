import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDetailPage } from './character-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],

})
export class CharacterDetailPageRoutingModule {}
