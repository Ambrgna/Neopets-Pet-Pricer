import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    ItemComponent,
    CommonModule
  ],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  colors: string[] = ['8-bit', 'Agueena', 'Alien', 'Apple', 'Asparagus', 'Aubergine', 'Avocado', 'Baby', 'Banana', 'Biscuit', 'Blue', 'Blueberry', 'Brown', 'Burlap', 'Camouflage', 'Candy', 'Carrot', 'Checkered', 'Chocolate', 'Chokato', 'Christmas', 'Clay', 'Cloud', 'Coconut', 'Custard', 'Darigan', 'Desert', 'Dimensional', 'Disco', 'Durian', 'Elderly boy', 'Elderly girl', 'Electric', 'Eventide', 'Faerie', 'Fire', 'Garlic', 'Ghost', 'Glowing', 'Gold', 'Golden', 'Gooseberry', 'Grape', 'Green', 'Grey', 'Halloween', 'Ice', 'Invisible', 'Island', 'Jelly', 'Juppie Swirl', 'Lemon', 'Lime', 'Magma', 'Mallow', 'Maractite', 'Maraquan', 'Marble', 'Mosaic', 'Msp', 'Mutant', 'Oil', 'Oil Paint', 'Onion', 'Orange', 'Origami', 'Pastel', 'Pea', 'Peach', 'Pear', 'Pepper', 'Pineapple', 'Pink', 'Pirate', 'Plum', 'Plushie', 'Polkadot', 'Polka dot', 'Potato', 'Purple', 'Quiguki boy', 'Quigukigir', 'Rainbow', 'Red', 'Relic', 'Robot', 'Royal boy', 'Royal girl', 'Shadow', 'Silver', 'Sketch', 'Skunk', 'Snot', 'Snow', 'Speckled', 'Split', 'Sponge', 'Spotted', 'Sroom', 'Starry', 'Stealthy', 'Steampunk', 'Strawberry', 'Striped', 'Swamp Gas', 'Thornberry', 'Tomato', 'Toy', 'Transparent', 'Tyrannian', 'Ummagine', 'Usuki boy', 'Usuki girl', 'Valentine', 'Water', 'White', 'Woodland', 'Wraith', 'Yellow', 'Zombie'];
  neopets: string[] = ['Acara', 'Aisha', 'Blumaroo', 'Bori', 'Bruce', 'Buzz', 'Chia', 'Chomby', 'Cybunny', 'Draik', 'Elephante', 'Eyrie', 'Flotsam', 'Gelert', 'Gnorbu', 'Grarrl', 'Grundo', 'Hissi', 'Ixi', 'Jetsam', 'Jubjub', 'Kacheek', 'Kau', 'Kiko', 'Koi', 'Korbat', 'Kougra', 'Krawk', 'Kyrii', 'Lenny', 'Lupe', 'Lutari', 'Meerca', 'Moehog', 'Mynci', 'Nimmo', 'Ogrin', 'Peophin', 'Poogle', 'Pteri', 'Quiggle', 'Ruki', 'Scorchio', 'Shoyru', 'Skeith', 'Techo', 'Tonu', 'Tuskaninny', 'Uni', 'Usul', 'Vandagyre', 'Wocky', 'Xweetok', 'Yurble', 'Zafara'];
  pet: string = '';
  results: Item[] = [];

  constructor(private service: ItemsService){
    
  }

  public async getPet(pet:String){   
    this.results = [];
    console.log(pet);

    if(pet!=null){    
      await this.postData(this.morphData(pet));
      await this.postData(this.plushieData(pet));
      await this.postData(this.transmogsData(pet));

      this.results.sort((a:Item,b:Item) => this.sortByPrice(a.price.value,b.price.value));
      
      console.log(this.results);
    }
  }

  public sortByPrice(a:number,b:number){
    var c = 0;
  
    if(a==null){
      a = 2147483647;
    } 
    if(b==null) {
      b = 2147483647;
    }
    
    c = a - b;

    return c;

  }
  
  public async postData(data:any[]){    
    var obj:any;
    var mapped;
    const response: any = await this.service.postItem(data).toPromise();

    obj = response.body;

    mapped = Object.keys(obj).map(key => ({name: obj[key].name, image: obj[key].image, price: obj[key].price, slug: obj[key].slug}));

    this.results = [ ...this.results, ...mapped];

  }

    public paintBrushData(): any[]{
      const pbs: string[] = [];
    
      this.colors.forEach( (c) => {
        var pb = "";
        if(c == 'Desert'){
          pb = 'Lost Desert Paint Brush';
        } else if(c == 'Disco'){
          pb = 'Disco Fever Paint Brush';
        } else if(c == 'Elderly boy' || c == 'Elderly girl'){
          if(!pbs.includes('Get Off My Lawn Paint Brush'))
            pb = 'Get Off My Lawn Paint Brush';
        } else if(c == 'Electric'){
          pb = 'Electric Blue Paint Brush';
        } else if(c == 'Fire'){
          pb = 'Fire, Fire, Your Pants On Fire Paint Brush';
        } else if(c == 'Island'){
          pb = 'Mystery Island Paint Brush';
        } else if(c == 'Sketch'){
          pb = 'Scritchy Sketchy Paint Brush';
        } else if(c == 'Strawberry'){
          pb = 'Strawberry Fields Forever Paint Brush';
        }  else if(c == 'Stealthy'){
          pb = 'Stealth Paint Brush';
        } else if(c == 'Royal boy' || c == 'Royal girl'){
          if(!pbs.includes('Royal Paint Brush'))
            pb = 'Royal Paint Brush';
        } else if(c == 'Usuki boy' || c == 'Usuki girl'){
          if(!pbs.includes('Usuki Paint Brush'))
            pb = 'Usuki Paint Brush';
        } else if(c == 'Robot'){
            pb = 'One-Use Robotification Zappermajig';
        } else if(c == '8-bit'){
          pb = '8-bit Power-Up Potion';
        } else {
          pb = c + ' Paint Brush';
        }
        
        pbs.push(pb);
    
      });
      console.log(JSON.stringify({
          name: pbs
        }));
          
        return pbs;
    }
    
      public chiaPopData(): string[]{
        const cps: string[] = [];
    
        this.colors.forEach( (c) => {
          var cp;
    
          cp = 'Magical ' + c + ' Chia Pop';
    
          cps.push(cp);
    
        });
        console.log(JSON.stringify({
            name: cps
          }));
          
          return cps;
      }
    
      public morphData(pet:String): string[]{
        const mps: string[] = [];
      
        this.colors.forEach( (c) => {
          var morphpotion = c + ' ' + pet + ' Morphing Potion';
      
          if(c == "Brown" && pet == 'Kiko'){
            mps.push('Potato Potion');
          } else if(c == "Pink" && pet == 'Lenny'){
            mps.push('Vengeful Scroll');
          } else {
            mps.push(morphpotion);
          }
        });
    
        console.log(JSON.stringify({
            name: mps
        }));
          
        return mps;
      }
    
      public plushieData(pet:String): string[]{
        const plushies: string[] = [];
      
        this.colors.forEach( (c) => {
          var plushie = 'Magical ' + c + ' ' + pet;
    
          plushies.push(plushie + ' Plushie');
          plushies.push(plushie + ' Toy');
    
        });
        console.log(JSON.stringify({
            name: plushies
          }));
          
          return plushies;
        }
    
      public transmogsData(pet:String): string[]{
        const tps: string[] = [];
    
        var transmogs = pet + ' Transmogrification Potion';
    
        tps.push(transmogs);
    
        console.log(JSON.stringify({
            name: tps
        }));
          
        return tps;
      }

}
