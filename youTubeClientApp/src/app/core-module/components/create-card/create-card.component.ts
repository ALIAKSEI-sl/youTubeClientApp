import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { createCustomCards } from 'src/app/redux/actions/customCards.action';
import { ICustomCard } from 'src/app/redux/state.models';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  urlReg = /^(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  createCardGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    imgUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(this.urlReg),
    ]),
    videoLink: new FormControl('', [
      Validators.required,
      Validators.pattern(this.urlReg),
    ]),
    date: new FormControl(new Date()),
  });

  constructor(private store: Store) {}

  submitForm() {
    this.createCardGroup.controls.date.setValue(new Date());
    if (this.createCardGroup.valid) {
      const card = this.getFormValue(this.createCardGroup);
      this.store.dispatch(createCustomCards({ card }));
      this.clearForm(this.createCardGroup);
    } else {
      this.createCardGroup.markAllAsTouched();
    }
  }

  isTitleValid(rules: string) {
    const control = this.createCardGroup.controls.title;
    if (rules === 'required') {
      return control.hasError('required') && control.touched;
    }
    if (rules === 'min') {
      return control.hasError('minlength') && control.touched;
    }
    if (rules === 'max') {
      return control.hasError('maxlength') && control.touched;
    } else {
      return false;
    }
  }

  isDescriptionValid() {
    const control = this.createCardGroup.controls.description;
    return control.hasError('maxlength') && control.touched;
  }

  isImgUrlValid(rules: string) {
    const control = this.createCardGroup.controls.imgUrl;
    if (rules === 'required') {
      return control.hasError('required') && control.touched;
    }
    if (rules === 'url') {
      return control.hasError('pattern') && control.touched;
    } else {
      return false;
    }
  }

  isVideoLinkValid(rules: string) {
    const control = this.createCardGroup.controls.videoLink;

    if (rules === 'required') {
      return control.hasError('required') && control.touched;
    }
    if (rules === 'url') {
      return control.hasError('pattern') && control.touched;
    } else {
      return false;
    }
  }

  getFormValue(group: FormGroup): ICustomCard {
    return group.getRawValue();
  }

  clearForm(form: FormGroup) {
    form.setValue({
      title: '',
      description: '',
      imgUrl: '',
      videoLink: '',
      date: new Date(),
    });
    form.markAsUntouched();
  }
}
