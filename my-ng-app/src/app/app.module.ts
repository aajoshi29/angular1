import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from '../components/calculator/app.calculator';
import { CourseListComponent } from '../components/courselist/app.courselist';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from 'src/components/employee/app.employee-list.component';
import { CheckUniqueDirective } from 'src/directives/app.unique.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CourseListComponent,
    EmployeeListComponent,
    CheckUniqueDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
