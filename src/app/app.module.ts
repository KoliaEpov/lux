import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ApiService } from './main/services/api.service';
import { PostCodeDetailsComponent } from './main/post-code-details/post-code-details.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: ':id', component: PostCodeDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostCodeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
