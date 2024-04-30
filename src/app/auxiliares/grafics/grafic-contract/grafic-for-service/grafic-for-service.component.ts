import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import { contractallGrafic } from 'src/app/models/graficsModels';

@Component({
  selector: 'app-grafic-for-service',
  templateUrl: './grafic-for-service.component.html',
  styleUrls: ['./grafic-for-service.component.css']
})
export class GraficForServiceComponent  implements AfterViewInit{
  @Input() datos?:contractallGrafic;
  @Input() canvasId?:string='';
  @Input() title?:string='';
  @Input() label?:string=''

  public chart?:Chart;
  colorPalette = ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 205, 86, 0.8)', 'rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)'];
  
  constructor(){}
  ngAfterViewInit(): void {
    this.graficar()
  }


  numMayor(data:number[]):number{
    if(data){
      return Math.max(...data);
    }
    return 0

  }
  

  graficar(){
    if(this.datos!=undefined&&this.canvasId!=undefined){
      const labels=this.datos?.names;
      const datos =this.datos?.dats;
      const idChar=this.canvasId;
      console.log("llego a la funcion graficar")
      console.log(idChar)
      let data ={
        labels:labels,
        datasets:[{
          skipNull:true,
          label:this.label,
          data:datos,
          borderWidth: 2,
          borderSkipped: false,
          minBarLenght:10,
          backgroundColor: datos.map((dato, index) => this.colorPalette[index % this.colorPalette.length])
  
        }
        ]
          
        
      }

      this.chart = new Chart(idChar,{
        
      type: 'bar' as ChartType,
      data:data,
      options: {
       
        scales: {
          y: {
            min:0,
            max:( this.numMayor(datos)+2)

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
        },
        
      },
      
      
    })
    }

}
}
