import { Routes } from '@angular/router';
import { HeroHome } from './components/hero-home/hero-home';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: HeroHome
    },
    {
    path: 'not-found',
    component: NotFound
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
