import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PolicyComponent } from '../policy/policy.component';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-work-together',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink,
    PolicyComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './work-together.component.html',
  styleUrls: ['./work-together.component.scss'],  
})

export class WorkTogetherComponent {
  workTogetherForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.workTogetherForm = this.fb.group({
      yourName: ['', Validators.required],
      yourMail: ['', [Validators.required, Validators.email]],
      helpYou: ['', Validators.required],
      acceptPolicy: [false, Validators.requiredTrue],  
    });
  }

  onSubmit() {
    if (!this.workTogetherForm.get('acceptPolicy')?.value) {
      this.workTogetherForm.get('acceptPolicy')?.setErrors({ required: true });
      this.workTogetherForm.get('acceptPolicy')?.markAsTouched();  
    }
    if (this.workTogetherForm.invalid) {
      this.workTogetherForm.markAllAsTouched();  
      return; 
    }

    console.log('Form Daten:', this.workTogetherForm.value);

    Swal.fire({
      title: 'Die Nachricht wurde gesendet.',
      text: 'Vielen Dank :-)',
      icon: 'success',
      confirmButtonText: 'Okay',
      confirmButtonColor: '#3dcfb6',
      background: '#1c1c1c',
      customClass: {
        title: 'swal-title',
        popup: 'swal-popup',
      },
    });
    
    this.workTogetherForm.reset();
  }
}


