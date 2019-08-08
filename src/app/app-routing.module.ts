import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'ListOfUsersComponent' },
    { path: 'ListOfUsersComponent', component: ListOfUsersComponent, pathMatch: 'full' }
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
