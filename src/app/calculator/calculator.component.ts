import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PostService} from '../services/posts.service'
@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  providers: [PostService]
})

export class CalculatorComponent {
  title = 'Just a FormControl ';
  name: string = null;

  calculator = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    weight: new FormControl(),
    height: new FormControl(),
    sex: new FormControl()
  })

  calculatorForm: FormGroup;

  constructor(private  fb: FormBuilder, private postService: PostService) {   // <--- inject FormBuilder(FormBuilder is a service)
    this.createForm();
    this.postService.getPosts().subscribe(posts => { //this return an observable
      console.log(posts);
    })
  }

  createForm(){
    this.calculator = this.fb.group({
      name: ['' ,Validators.pattern('[A-Za-z]{1,}')],  //<--Reactive Validator
      age: ['' ,Validators.pattern('[0-9]{1,3}')],
      weight: ['' ,Validators.pattern('[0-9]{1,3}')],
      height: ['' ,Validators.pattern('[0-9]{1,3}')],
      sex: ['' ,Validators.pattern('[a-zA-Z]{1,6}')],
    })
  }

  calculateBMI(age: number, weight: number, height: number, sex: String){
    alert("Your BMI is " + weight/((height/100)*(height/100)));
  }
  
}
