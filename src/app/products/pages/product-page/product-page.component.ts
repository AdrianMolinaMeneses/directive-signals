import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  //private fb = inject(FormBuilder);
  public color: string = 'green';
  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(6), Validators.email],
      ],
    });
  }

  changeColor(): void {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    this.color = color;
    //console.log(color);
  }
}
