import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JobDetail } from '../job-detail';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  job: JobDetail;  

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params =>{
        // const id: string = +params['id'];
        // console.log();
        this.jobService.getJob(params['id']).subscribe(result => this.job = result);
        console.log(this.job);
      }
    )
  }

}
