import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
{
  path: 'photos', component: PhotosComponent
},
{
  path: 'users', component: UsersComponent
},
{
  path: 'posts', component: PostsComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
