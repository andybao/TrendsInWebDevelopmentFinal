import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[];

  constructor(
    // private route: ActivatedRoute,
    // private location: Location,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobService.getJobList().subscribe(result => this.jobs = result.slice(1,11));
    console.log(this.jobs);
  }

}
