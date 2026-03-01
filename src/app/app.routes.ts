import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Techcomp Consultants' },
  { path: 'services', component: ServicesComponent, title: 'Services | Techcomp Consultants' },
  { path: 'about', component: AboutComponent, title: 'About | Techcomp Consultants' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Techcomp Consultants' },
  { path: '**', redirectTo: '' },
];