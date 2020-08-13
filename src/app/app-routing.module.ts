import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  {
    path: '',
    component: ViewBlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
