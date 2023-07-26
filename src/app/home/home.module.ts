import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DetailedHomeComponent } from './detailed-home/detailed-home.component';
import { HomeService } from './home.service';
 

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'homedetails',
        component: DetailedHomeComponent,
      }
     

    ]),
  ],
  declarations: [HomeComponent, DetailedHomeComponent],
  providers:[HomeService]
})
export class HomeModule {}
