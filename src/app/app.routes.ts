import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes, withDebugTracing} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path: 'home', component: HomepageComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    // {path: '**', component: PageNotFoundComponent}
];
