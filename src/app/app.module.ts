import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsContainerComponent } from './news-container/news-container.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsPageComponent } from './news-page/news-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { JournalistComponent } from './journalist/journalist.component';
import { JournalistAccountComponent } from './journalist-account/journalist-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsContainerComponent,
    NewsPageComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    JournalistComponent,
    JournalistAccountComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: NewsContainerComponent },
      { path: 'news/:id', component: NewsPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'journalist', component: JournalistComponent },
      { path: 'adminJournalistAccount', component: JournalistAccountComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    OrderService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
