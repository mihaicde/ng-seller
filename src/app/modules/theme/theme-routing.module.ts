import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { ThemeMainComponent } from './components/theme-main/theme-main.component';
import { ThSelectThemeComponent } from './components/th-select-theme/th-select-theme.component';

// PAGES
import { ThHomeComponent } from './pages/th-home/th-home.component';
import { ThContactComponent } from './pages/th-contact/th-contact.component';
import { ThAboutComponent } from './pages/th-about/th-about.component';
import { ThHelpComponent } from './pages/th-help/th-help.component';
import { ThStoreComponent } from './pages/th-store/th-store.component';
import { ThScheduleComponent } from './pages/th-schedule/th-schedule.component';


const routes: Routes = [
  {
    path: '',
    component: ThemeMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'select-theme',
        pathMatch: 'full',
      },
      // COMPONENTS
      {
        path: 'select-theme',
        component: ThSelectThemeComponent
      },
      // PAGES
      {
        path: 'home',
        component: ThHomeComponent
      },
      {
        path: 'contact',
        component: ThContactComponent
      },
      {
        path: 'about',
        component: ThAboutComponent
      },
      {
        path: 'help',
        component: ThHelpComponent
      },
      {
        path: 'store',
        component: ThStoreComponent
      },
      {
        path: 'schedule',
        component: ThScheduleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
