import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data = [];

  public results = []; 
   constructor( private data1:DataService) { }

  ngOnInit(): void {
    this.data1.getData().subscribe((results)=>{
      this.data = results.Countries;
     

    });
    
  }
}
