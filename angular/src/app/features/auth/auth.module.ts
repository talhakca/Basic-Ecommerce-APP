/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/* Internal Modules */
import { SharedModule } from '../shared/shared.module';
import { RappiderEditFormModule } from '../rappider/components';

/* 3rd Party Modules */
import { TranslateModule } from '@ngx-translate/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDividerModule } from 'ng-zorro-antd/divider';

/* Components */
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

/* Guards */
import { AuthGuard } from './guards';

/* Routes */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    NzSpinModule,
    NzDividerModule,
    RappiderEditFormModule,
  ],
  providers: [
    /* Guards */
    AuthGuard,
  ],
  exports: [],
})
export class AuthModule {}
