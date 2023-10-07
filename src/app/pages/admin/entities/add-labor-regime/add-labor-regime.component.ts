import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LaborRegimeRequest } from 'src/app/models/laborRegime';
import { LaborRegimeService } from 'src/app/services/labor-regime.service';

@Component({
  selector: 'app-add-labor-regime',
  templateUrl: './add-labor-regime.component.html',
  styleUrls: ['./add-labor-regime.component.css']
})
export class AddLaborRegimeComponent implements OnInit{
  formError: string = "";
  formError2: string = "";

  laborRegimeForm = this.formBuilder.group({
    name:['',[Validators.required,]],
    code:['',[Validators.required,Validators.maxLength(8)]],
    description:['',[Validators.required]]
  })
  constructor(
    private formBuilder:FormBuilder,
    private laborRegimeService:LaborRegimeService,
    private router: Router){}

    get name(){
      return this.laborRegimeForm.controls.name
    }
    get code(){
      return this.laborRegimeForm.controls.code
    }
    get description(){
      return this.laborRegimeForm.controls.description
    }

    formSubmit(){
      if(this.laborRegimeForm.valid){
        
        const data = this.laborRegimeForm.value as LaborRegimeRequest;
        console.log(data)
        this.laborRegimeService.createLaborRegime(data).subscribe({
          next:(data2)=>{
            console.log(data2);
          },error:(errorData)=>{
            console.error(errorData);
            this.formError = errorData.error.errors;
            this.formError2 = errorData.error.message;
          },complete:()=>{
            this.router.navigate(['/admin/laborRegime']);
          }
        });
        
      }else{
        this.laborRegimeForm.markAllAsTouched();
      }
    }
  ngOnInit(): void {
      
  }

}
