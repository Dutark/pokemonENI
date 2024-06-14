import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public contactMsg: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(20)]),
  })

  onSubmit() {
    if (this.contactMsg.valid) {
      const formData = this.contactMsg.value;
      localStorage.setItem('contactData', JSON.stringify(formData));
      console.log("Form Submitted!", formData);
      console.log("Form is valid")
    } else {
      console.log("Form is invalid");
    }
    console.log(this.contactMsg);
  }
}
