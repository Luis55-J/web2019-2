import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-autor-table',
  templateUrl: './autor-table.component.html',
  styleUrls: ['./autor-table.component.scss']
})
export class AutorTableComponent implements OnInit {

  public autorFormulario:FormGroup;
  public author:any;


  constructor(protected fb:FormBuilder,protected service:AuthorService) { 
    
  }

  ngOnInit() {
   this.service.getAuthor().subscribe(data=>{this.author=data;})
  }

 

  

}
