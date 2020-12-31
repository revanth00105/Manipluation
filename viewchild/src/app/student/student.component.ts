import { ViewChild, ViewChildren ,QueryList } from '@angular/core';
import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit , AfterViewInit  {

  constructor() { }
 @ViewChild(StudentDetailsComponent)
  studentdetail!: StudentDetailsComponent;
  @ViewChildren(StudentDetailsComponent) 
  studentdetails!:QueryList<StudentDetailsComponent>;
  ngOnInit(): void {
  }
  public students=[
  {
    id: 1,
    name: "revanth",
    grade: 12
  },
 {
   id: 2,
   name:"nani",
   grade:13,
 },
 {
   id: 3,
   name:"revanthnani",
   grade:14
 }

]

ngAfterViewInit(){
setTimeout(()=>{
this.studentdetail.student.name="kishore";
 this.studentdetails.toArray().forEach((comp:any)=>{
comp.student.grade=13;
})
} ,0); 
}
}
