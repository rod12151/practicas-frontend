import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioRequest } from 'src/app/models/servicios';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit{

  formError:string="";
  formError2:string="";
  constructor(
    private formbulder:FormBuilder,
    private servicesService:ServicesService,
    private router:Router
  ){}

  serviceForm = this.formbulder.group({
    name:['',[Validators.required,Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/)]],
    code:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
    description:['',[Validators.required]]
  })

  get name(){
    return this.serviceForm.controls.name
  }
  get code(){
    return this.serviceForm.controls.code
  }
  get description(){
    return this.serviceForm.controls.description
  }

  formSumit(){
    if(this.serviceForm.valid){
      const request = this.serviceForm.value as ServicioRequest;
      console.log(request)
      this.servicesService.createService(request).subscribe({
        next:(response)=>{
          console.log(response);
        },error:(errorData)=>{
          this.formError = errorData.error.errors;
          this.formError2 = errorData.error.message;
        },complete:()=>{
          this.router.navigate(['/admin/Services'])
        }
      });
    }else{
      this.serviceForm.markAllAsTouched();
    }
  }


  ngOnInit(): void {
      
  }
}

