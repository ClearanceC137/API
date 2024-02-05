import { Component, OnInit } from '@angular/core';
import {PostDataService} from '../services/post-data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  postData :any={};
  constructor(private postDataService: PostDataService) { }

  ngOnInit(): void {
  }
  getData(data:NgForm){
    console.log(data)
    this.postData = data;
    this.postDataService.postData(this.postData).subscribe(
      (response) => {
        console.log('POST request successful:', response);
        // Handle the response here
      },
      (error) => {
        console.error('Error in POST request:', error);
        // Handle errors here
      }
    );
}
}
