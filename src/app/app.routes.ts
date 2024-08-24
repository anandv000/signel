import { Routes } from '@angular/router';
import { HomeComponent } from './signel/home/home.component';
import { Example1Component } from './signel/home/example1/example1.component';
import { Example2Component } from './signel/home/example2/example2.component';
import { Example3Component } from './signel/home/example3/example3.component';

export const routes: Routes = [
    { path:'', component:HomeComponent , children: [
        { path:'home/example1', component:Example1Component },
        { path:'home/example2', component:Example2Component },
        { path:'home/example3', component:Example3Component }
    ] }
];
