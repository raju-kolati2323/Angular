import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndianService } from '../service/indian.service';
import Swal from 'sweetalert2';
import { ChineseService } from '../service/chinese.service';
import { MexicanService } from '../service/mexican.service';
import { ItalianService } from '../service/italian.service';
import { FrenchService } from '../service/french.service';
import { JapaneseService } from '../service/japanese.service';
import { KoreanService } from '../service/korean.service';
import { ThaiService } from '../service/thai.service';
import { SpanishService } from '../service/spanish.service';

@Component({
  selector: 'app-adddish',
  templateUrl: './adddish.component.html',
  styleUrl: './adddish.component.css'
})
export class AdddishComponent {
  dishform:FormGroup=new FormGroup({})
  constructor(private indian:IndianService,private fb:FormBuilder,private chinese:ChineseService, private mexican:MexicanService, private italian:ItalianService, private french:FrenchService, private japanese:JapaneseService, private korean:KoreanService, private thai:ThaiService, private spanish:SpanishService){
    this.dishform=this.fb.group({
      id:['',Validators.required],
      dishname:['',Validators.required],
      image:['',Validators.required],
      ingredients:['',Validators.required],
      description:['',Validators.required],
      cost:['',Validators.required],
      cuisine:['',Validators.required]
  })}
  addme(){
    // this.indian.adddish(this.dishform.value)
    const newDish = this.dishform.value;
    if (newDish.cuisine == 'indian') {
      this.indian.adddish(this.dishform.value)
      }
    else if(newDish.cuisine == 'mexican') {
      this.mexican.adddish(this.dishform.value)
      }
    else if(newDish.cuisine == 'italian') {
      this.italian.adddish(this.dishform.value)
      }
    else if(newDish.cuisine == 'french') {
      this.french.adddish(this.dishform.value)
      }
    else if(newDish.cuisine == 'chinese') {
      this.chinese.adddish(this.dishform.value)
      }
    else if(newDish.cuisine == 'japanese') {
      this.japanese.adddish(this.dishform.value)
      }
    else if(newDish.cuisine == 'korean') {
      this.korean.adddish(this.dishform.value)
      }
    else if(newDish.cuisine == 'thai') {
      this.thai.adddish(this.dishform.value)
      }
    else if(newDish.cuisine == 'spanish') {
      this.spanish.adddish(this.dishform.value)
      }
      Swal.fire({
        title:'Good job!',
        text:'Product added successfully',
        icon:'success',
      })
    }
    
  }
    
