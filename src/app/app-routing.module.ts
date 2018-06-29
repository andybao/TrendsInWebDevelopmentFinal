import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { JobsComponent } from "./jobs/jobs.component";
import { CoursesComponent } from "./courses/courses.component";
import { JobDetailComponent } from "./job-detail/job-detail.component";

const routes: Routes = [
    {path: "kevin", component: JobsComponent},
    {path: "kevin/jobdetail/:id", component:JobDetailComponent},
    {path: "andy", component: CoursesComponent}
    
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
