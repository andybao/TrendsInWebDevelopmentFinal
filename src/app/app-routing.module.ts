import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { JobsComponent } from "./jobs/jobs.component";
import { CoursesComponent } from "./courses/courses.component";

const routes: Routes = [
    {path: "kevin", component: JobsComponent},
    {path: "andy", component: CoursesComponent}
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
