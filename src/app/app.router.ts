import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const router: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'calculator', component: CalculatorComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
