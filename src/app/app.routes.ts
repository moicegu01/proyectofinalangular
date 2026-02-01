import { Routes } from '@angular/router';
import { AboutUs } from './components/about-us/about-us';
import { Contactanos } from './components/contactanos/contactanos';
import { EntradaAdmin } from './components/entrada-admin/entrada-admin';

export const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full' }, 
  { path: 'about-us', component: AboutUs },
  { path: 'contactanos', component: Contactanos },
  { path: 'admin', component: EntradaAdmin }
];
