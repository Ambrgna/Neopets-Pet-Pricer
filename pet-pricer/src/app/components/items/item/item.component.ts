import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  @Input() item?: Item;
  price: String | number = "";
  
  ngOnInit(): void {
    console.log(this.item?.price.value);
    if(this.item?.price.value==null){
      this.price = "No price data available";
    } else { 
      this.price = this.item?.price.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " NP";
    }
    console.log(this.item);
  }

  constructor(){

  }
  
}
