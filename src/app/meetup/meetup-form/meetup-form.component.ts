import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.css']
})
export class MeetupFormComponent implements OnInit {
  meetupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private meetupService: MeetupService) { }

  ngOnInit(): void {
    this.meetupForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.meetupForm.valid) {
      // Выполнить сохранение митапа
      const { title, description } = this.meetupForm.value;
      this.meetupService.addMeetup(title, description);
      // После успешного сохранения митапа, сбросить форму
      this.meetupForm.reset();
    } else {
      // Пометить все поля формы как "потронутые", чтобы показать сообщения об ошибке
      this.meetupForm.markAllAsTouched();
    }
  }
}
