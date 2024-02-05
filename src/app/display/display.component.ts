import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import {PostDataService} from '../services/post-data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  rawData:any;
  postData :any={};
  constructor(private getDataService: GetDataService,private postDataService: PostDataService) { }

  getData(data:NgForm){
      console.log(data)
      this.postData = data;
  }
  ngOnInit(): void {
    this.getDataService.getNews().subscribe((data)=>{
      this.rawData = data;
      this.rawData = this.rawData.data;
    });
  }

}
