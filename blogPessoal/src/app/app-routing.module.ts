import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-tema', component: PostTemaComponent },
  { path: 'edita-post/:id', component: PutPostagemComponent},
  { path: 'delete-post/:id', component: DeletePostagemComponent },
  { path: 'edita-tema/:id', component: PutTemaComponent },
  { path: 'delete-tema/:id', component: DeletePostagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
