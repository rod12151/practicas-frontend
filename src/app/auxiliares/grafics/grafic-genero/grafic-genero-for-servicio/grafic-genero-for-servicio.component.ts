import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { generoGrafic } from 'src/app/models/graficsModels';

@Component({
  selector: 'app-grafic-genero-for-servicio',
  templateUrl: './grafic-genero-for-servicio.component.html',
  styleUrls: ['./grafic-genero-for-servicio.component.css']
})
export class GraficGeneroForServicioComponent implements OnInit {
  @Input() datos?:generoGrafic[];

  public chartAll?: Chart;
  numVar:number=0;
  numMuj:number=0;
  title:string="Genero De Usuarios Por Servicio";

  constructor() {

  }
  ngOnInit(): void {
    this.graficar()
  }
  getLabels(data:generoGrafic[]){
    let labels:String[] =[]
    
    if(data){
      for(let a of data){
        labels.push(a.name)
      }
      return labels
    }
    return labels
  }
  getdatosmujeres(data:generoGrafic[]):number[]{
    let labels:number[] =[]
    let num:number=0;
    if(data){
      for(let a of data){
        labels.push(a.dats[1])
        num= num + a.dats[1]
      }
      this.numMuj=num;
      return labels
    }
    return labels
  }
  getdatosvarones(data:generoGrafic[]):number[]{
    let labels:number[] =[]
    let num:number=0;
    if(data){
      for(let a of data){
        labels.push(a.dats[0])
        num= num + a.dats[0]
      }
      this.numVar=num;
      return labels
    }
    return labels
  }

  graficar(){
    if(this.datos){
      const labels =this.getLabels(this.datos);
      const numVa =this.getdatosvarones(this.datos);
      const numMu = this.getdatosmujeres(this.datos);
      console.log(labels);
      console.log(numVa);
      console.log(numMu);
      let data ={
        labels:labels,
        datasets:[
          {
            label:'Masculino',
            data:numVa,
            borderWidth: 2,
            borderSkipped: false,
            minBarLenght:10,
            backgroundColor:'#8ecae6'
          },{
            label:'Femenino',
            data:numMu,
            borderWidth: 2,
            borderSkipped: false,
            minBarLenght:6,
            backgroundColor:'#ff006e'
          }
        ]
      }

      this.chartAll = new Chart("chartAll",{
      type: 'bar',
      data:data,
      options: {
        scales:{
          y:{
            min:0,
            max:(Math.max(...(numVa.concat(numMu))))+2
          }

        },
        responsive: true,
        
        
        plugins: {
          legend: {
            position: 'top',
          },
          /*title: {
            display: true,
            text: this.title
          },*/
        }
      },
      
      
    })
    }

    


  }
  
  
  


  



  
 

}
