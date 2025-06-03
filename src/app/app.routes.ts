import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GpsComponent } from './components/gps/gps.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'gps',
        component: GpsComponent
    }
];
