import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkConditionRequest } from 'src/app/models/workCondition';
import { WorkConditionService } from 'src/app/services/work-condition.service';

@Component({
  selector: 'app-add-work-condition',
  templateUrl: './add-work-condition.component.html',
  styleUrls: ['./add-work-condition.component.css']
})
export class AddWorkConditionComponent implements OnInit {
  formError: string = "";
  formError2: string = "";

  workConditionsForm = this.formBuilder.group({
    name:['',[Validators.required,]],
    code:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
    description:['',[Validators.required]]
  })


  constructor(
    private formBuilder:FormBuilder,
    private workconditionservice:WorkConditionService,
    private router: Router){}
    get name(){
      return this.workConditionsForm.controls.name
    }
    get code(){
      return this.workConditionsForm.controls.code
    }
    get description(){
      return this.workConditionsForm.controls.description
    }

    formSumit(){
      if(this.workConditionsForm.valid){
        
        const data = this.workConditionsForm.value as WorkConditionRequest;
        console.log(data)
        this.workconditionservice.createWorkCondition(data).subscribe({
          next:(data2)=>{
            console.log(data2);
          },error:(errorData)=>{
            console.error(errorData);
            this.formError = errorData.error.errors;
            this.formError2 = errorData.error.message;
          },complete:()=>{
            this.router.navigate(['/admin/workcondition']);
          }
        });
        
      }else{
        this.workConditionsForm.markAllAsTouched();
      }
    }


  ngOnInit(): void {

  }
  
}
