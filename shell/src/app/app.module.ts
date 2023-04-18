import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { matcher: startsWith('mfe1'), component: WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element', type:'angular'} },
    { matcher: startsWith('mfe2'), component: WrapperComponent, data: { importName: 'mfe2', elementName: 'mfe2-element', type:'angular' } },
    { matcher: startsWith('mfe3'), component: WrapperComponent, data: { importName: 'mfe3', elementName: 'mfe3-element', type:'angular' } },
    { matcher: startsWith('mfe4'), component: WrapperComponent, data: { importName: 'mfe4', elementName: 'mfe4-element', type:'react' } },
    { matcher: startsWith('mfe5'), component: WrapperComponent, data: { importName: 'mfe5', elementName: 'mfe5-element', type:'vue' } },
    {
      path: 'dashboard', component: DashboardComponent,
      children: [
        { matcher: startsWith('dashboard/mfe1'), component: WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element', type:'angular' },outlet: 'route1' },
        { matcher: startsWith('dashboard/mfe2'), component: WrapperComponent, data: { importName: 'mfe2', elementName: 'mfe2-element', type:'angular' },outlet: 'route2' },
        { matcher: startsWith('dashboard/mfe3'), component: WrapperComponent, data: { importName: 'mfe3', elementName: 'mfe3-element', type:'angular' },outlet: 'route3' },
        { matcher: startsWith('dashboard/mfe4'), component: WrapperComponent, data: { importName: 'mfe4', elementName: 'mfe4-element', type:'react' },outlet: 'route4' },
        { matcher: startsWith('dashboard/mfe5'), component: WrapperComponent, data: { importName: 'mfe5', elementName: 'mfe5-element', type:'vue' },outlet: 'route5' },
      ]
    }
    ]) 
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
