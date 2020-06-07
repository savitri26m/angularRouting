import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuardService } from "./can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./server-resolver.service";
import { UsersFormComponent } from "./forms/template-driven/users-form/users-form.component";
import { ReactiveFormComponent } from "./forms/reactive-form/reactive-form/reactive-form.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'usersForm', component: UsersFormComponent},
    {path: 'reactiveForm', component: ReactiveFormComponent},
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ] },
   
    {path: 'servers',
    // canActivate:[AuthGuard] ,
    canActivateChild: [AuthGuard],
     component: ServersComponent, children: [
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]},
      {path: ':id', component: ServerComponent, resolve: {serverR: ServerResolver}  }
    ]},
    // {path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found !!'} },
    {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
    
  ]

  @NgModule({
    imports: [
        // use hash is used when we have to use the older # tag in URL. When your index.html file is not loaded by some browsers
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}