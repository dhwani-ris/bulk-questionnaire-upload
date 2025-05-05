import { Routes } from '@angular/router';
import { FormUploadComponent } from './components/form-upload/form-upload.component';

export const routes: Routes = [
  { path: '', component: FormUploadComponent },
  { path: 'upload', component: FormUploadComponent }
];
