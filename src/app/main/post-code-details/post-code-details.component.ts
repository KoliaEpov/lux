import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-post-code-details',
  templateUrl: './post-code-details.component.html',
  styleUrls: ['./post-code-details.component.css']
})
export class PostCodeDetailsComponent implements OnInit {
  
  public details: any;
  public postcode: string;
  public detailsKeys: any;
  private subscription: any;
  
  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postcode = params.id;
    });
    this.getDetailsInfo(this.postcode);
  }
  
  getDetailsInfo(postCode) {
    this.subscription = this.apiService.getDetails(postCode).subscribe(
      (response: any): void => {
        this.details = response.result;
        this.detailsKeys = Object.keys(this.details);
        },
      (error: Error): void => console.log('oops', error));
  }
  
  handleReturn() {
    this.router.navigate(['/']);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
