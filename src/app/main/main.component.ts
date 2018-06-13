import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  public filterText: string;
  public postCodesInfoArray: any;
  public searchForm: FormGroup;
  public subscription:  any;
  
  public constructor(private apiService: ApiService,
              private fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.createForm();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  public createForm(): void {
    this.searchForm = this.fb.group(({
      search: ['', Validators.required]
    }));
  }
  
  public handleSearch(): void {
    this.subscription = this.apiService.getInfo(this.searchForm.value.search).subscribe(
      (response: any): void => {
        this.postCodesInfoArray = response.result;
        },
      (error: Error): void => console.log('oops', error));
  }
  
  public searchFilter(filterText: string): any {
    if (filterText) {
      return this.postCodesInfoArray.filter((item: any) => {
        const itemKeys: Array<string> = Object.keys(item);
        return itemKeys.some((key: string) =>  this._compareStrings(item[key], filterText));
      });
    } else {
      return this.postCodesInfoArray;
    }
  }
  
  private _compareStrings(fieldValue: string, checkValue: string): boolean {
    return fieldValue && (fieldValue.toString().toLowerCase().indexOf(checkValue.toLowerCase()) > -1);
  }

}
