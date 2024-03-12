import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

