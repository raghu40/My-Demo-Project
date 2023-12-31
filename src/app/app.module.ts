import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { customerReducer } from './reducers/customer.reducer';
import { ContactReducer } from './reducers/contact.reducer';
import { AuthService } from './common/auth.service';
import { RequiredFieldComponent } from './shared/required-field/required-field.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
     AppRoutingModule, StoreModule.forRoot({customer: customerReducer, contact: ContactReducer}) , NgbModule ],
  declarations: [ AppComponent, ModalComponent ],
  bootstrap:    [ AppComponent ],
  providers:[AuthService],
  
})
export class AppModule { }
