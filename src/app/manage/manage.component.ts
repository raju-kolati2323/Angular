import { Component } from '@angular/core';
import { IndianService } from '../service/indian.service';
import { MexicanService } from '../service/mexican.service';
import { ThaiService } from '../service/thai.service';
import { ChineseService } from '../service/chinese.service';
import { KoreanService } from '../service/korean.service';
import { JapaneseService } from '../service/japanese.service';
import { SpanishService } from '../service/spanish.service';
import { ItalianService } from '../service/italian.service';
import { FrenchService } from '../service/french.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  constructor(private indian:IndianService, private mexican:MexicanService,private thai:ThaiService, private chinese:ChineseService,private korean:KoreanService,private japanese:JapaneseService,private spanish:SpanishService,private italian:ItalianService,private french:FrenchService){}
  dishlist:any;
  ngOnInit() {
    this.loadDishes();
  }
  loadDishes() {
    forkJoin({
      indian: this.indian.getdishes1(),
      mexican:this.mexican.getdishes2(),
      italian:this.italian.getdishes3(),
      french:this.french.getdishes4(),
      chinese: this.chinese.getdishes5(),
      japanese:this.japanese.getdishes6(),
      korean:this.korean.getdishes7(),
      thai:this.thai.getdishes8(),
      spanish:this.spanish.getdishes9(),
    }).subscribe((results: { indian: any; chinese: any, mexican:any;italian:any;french:any;japanese:any;korean:any;thai:any;spanish:any; }) => {
      this.dishlist = [
        ...results.indian.map((dish: any) => ({ ...dish, cuisine: 'indian' })),
        ...results.mexican.map((dish: any) => ({ ...dish, cuisine: 'mexican' })),
        ...results.italian.map((dish: any) => ({ ...dish, cuisine: 'italian' })),
        ...results.french.map((dish: any) => ({ ...dish, cuisine: 'french' })),
        ...results.chinese.map((dish: any) => ({ ...dish, cuisine: 'chinese' })),
        ...results.japanese.map((dish: any) => ({ ...dish, cuisine: 'japanese' })),
        ...results.korean.map((dish: any) => ({ ...dish, cuisine: 'korean' })),
        ...results.thai.map((dish: any) => ({ ...dish, cuisine: 'thai' })),
        ...results.spanish.map((dish: any) => ({ ...dish, cuisine: 'spanish' })),
      ];
    });
  }
  delete(did: any, cuisine: string) {
    let res: any;
    if (cuisine === 'indian') {
      res = this.indian.deletedish(did);
    } else if (cuisine === 'mexican') {
      res = this.mexican.deletedish(did);
    }else if (cuisine === 'italian') {
      res = this.italian.deletedish(did);
    }else if (cuisine === 'french') {
      res = this.french.deletedish(did);
    }else if (cuisine === 'chinese') {
      res = this.chinese.deletedish(did);
    }else if (cuisine === 'japanese') {
      res = this.japanese.deletedish(did);
    }else if (cuisine === 'korean') {
      res = this.korean.deletedish(did);
    }else if (cuisine === 'thai') {
      res = this.thai.deletedish(did);
    }else if (cuisine === 'spanish') {
      res = this.spanish.deletedish(did);
    }
    alert(res);
  }

  edit(d: any) {
    d.pflag = true;
  }

  update(d: any) {
    d.pflag = false;
    let res: any;
    if (d.cuisine == 'indian') {
      console.log(d)
      res = this.indian.updatedish(d);
    } else if (d.cuisine == 'mexican') {
      res = this.mexican.updatedish(d);
    } else if (d.cuisine == 'italian') {
      res = this.italian.updatedish(d);
    } else if (d.cuisine == 'french') {
      res = this.french.updatedish(d);
    } else if (d.cuisine == 'chinese') {
      res = this.chinese.updatedish(d);
    } else if (d.cuisine == 'japanese') {
      res = this.japanese.updatedish(d);
    } else if (d.cuisine == 'korean') {
      res = this.korean.updatedish(d);
    } else if (d.cuisine == 'thai') {
      res = this.thai.updatedish(d);
    } else if (d.cuisine == 'spanish') {
      res = this.spanish.updatedish(d);
    }
    alert('Product updated');
  }

  // update(d:any){
  //   d.pflag=false;
  //   const res=this.indian.updatedish(d);
  //   alert('Product updated')
  // }
  // ngOnInit(){
  //   this.indian.getdishes1().subscribe((data:any)=>{
  //     this.dishlist=data;
  //   })
  // }
}
