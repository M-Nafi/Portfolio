import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PolicyComponent } from '../policy/policy.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-work-together',
  standalone: true,
  imports: [ CommonModule, TranslateModule, RouterLink, PolicyComponent, ReactiveFormsModule ],
  templateUrl: './work-together.component.html',
  styleUrls: ['./work-together.component.scss'],  
})

export class WorkTogetherComponent {
  workTogetherForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.workTogetherForm = this.fb.group({
      yourName: ['', Validators.required],
      yourMail: ['', [Validators.required, Validators.email]],
      helpYou: ['', Validators.required],
      acceptPolicy: [false, Validators.requiredTrue],
    });
  }

  areFieldsFilled(): boolean {
    let nameCheck = this.workTogetherForm.get('yourName');
    let mailCheck = this.workTogetherForm.get('yourMail');
    let helpYouCheck = this.workTogetherForm.get('helpYou');
    let policyCheck = this. workTogetherForm. get('acceptPolicy');

    return (
      nameCheck?.valid === true &&
      mailCheck?.valid === true &&
      helpYouCheck?.valid === true &&
      policyCheck?.valid === true
    );
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

    let formData = {
      name: this.workTogetherForm.get('yourName')?.value,
      email: this.workTogetherForm.get('yourMail')?.value,
      message: this.workTogetherForm.get('helpYou')?.value,
    };

    this.http.post('https://www.nafi-mueftueoglu.de/your-php-script.php', formData).subscribe({
      next: () => {
        Swal.fire({
          title: 'Message Sent',
          text: 'Thank you :-)',
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
      },
      error: () => {
        Swal.fire({
          title: 'Error!',
          text: 'Message could not be sent',
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: '#3dcfb6',
          background: '#1c1c1c',
        });
      }
    });
  }
  scrollToTop(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}