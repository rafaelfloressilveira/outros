import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'spa-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 10;

}
