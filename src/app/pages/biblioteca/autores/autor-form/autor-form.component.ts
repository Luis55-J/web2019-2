import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.scss']
})
export class AutorFormComponent implements OnInit {
  public autorFormulario:FormGroup;
  public author:any;


  constructor(protected fb:FormBuilder,protected service:AuthorService) { 
    this.createForm()
  }

  ngOnInit() {
   this.service.getAuthor().subscribe(data=>{this.author=data;})
  }

  saveAuthor(){
    this.service.postAuthor(this.autorFormulario.value).subscribe(data=>alert('listo'))
  }

  createForm(){
    this.autorFormulario= this.fb.group({
      code:['',Validators.required],
      name:['',Validators.required],
      lastname:['',Validators.required],
      bd_year :['',Validators.required],
      death_year :['',Validators.required],
      bd_place :['',Validators.required]
    })
  }
}
