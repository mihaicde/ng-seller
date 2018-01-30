import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';

import { MaterializeModule } from 'angular2-materialize';

import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { ThemeNavComponent } from './components/theme-nav/theme-nav.component';
import { ThemeMainComponent } from './components/theme-main/theme-main.component';
import { ThSelectThemeComponent } from './components/th-select-theme/th-select-theme.component';

// PAGES
import { ThHomeComponent } from './pages/th-home/th-home.component';
import { ThContactComponent } from './pages/th-contact/th-contact.component';
import { ThAboutComponent } from './pages/th-about/th-about.component';
import { ThHelpComponent } from './pages/th-help/th-help.component';
import { ThStoreComponent } from './pages/th-store/th-store.component';
import { ThScheduleComponent } from './pages/th-schedule/th-schedule.component';



@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    MaterializeModule,
    SharedModule
  ],
  declarations: [
    ThemeNavComponent,
    ThemeMainComponent,
    ThSelectThemeComponent, // Il poti scoate daca nu iti place
    ThHomeComponent,
    ThContactComponent,
    ThAboutComponent,
    ThHelpComponent,
    ThStoreComponent,
    ThScheduleComponent
  ]
})
export class ThemeModule { }
