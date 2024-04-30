import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { generoGrafic } from 'src/app/models/graficsModels';

@Component({
  selector: 'app-grafic-all-genero',
  templateUrl: './grafic-all-genero.component.html',
  styleUrls: ['./grafic-all-genero.component.css']
})
export class GraficAllGeneroComponent implements OnInit {
  //@Input() datos?: number[]
  //@Input() labels?: string[]
  @Input() datas?:generoGrafic;
  @Input() label?:string

  public chartgender?: Chart;
  constructor() {

  }
  ngOnInit(): void {
    this.graficar();
  }
totaldatos(list:number[]):number{
  let res:number=0
  if(list.length>=0){
    for(let a of list){
      res= res+a;

    }
    return res;

  }
  return res;
}

maxDatos(list:number[]):number{
  if(list){
    return Math.max(...list)
  }
  return 0

}

  graficar() {
    if (this.datas!=undefined) {
      const labels = this.datas.genders;
      const datos = this.datas.dats;
      let data = {
        labels: labels,
        datasets: [{
          label:this.label,
          data: datos,
          backgroundColor: [
            '#8ecae6',
            '#ff006e',
          ],
          borderColor: [
            '#023047',
            '#8338ec',
          ],
          borderWidth: 2,
          barThickness:30,
          hoverBorderColor:[
            '#344e41',
            '#ffbe0b'
          ]


        }]
      };
      this.chartgender = new Chart("chartgender", {
        type: 'bar' as ChartType,
        data: data,
        options: {
          scales: {
            y: {
              min:0,
              max:this.maxDatos(datos)+2
            }
          }
        }
      })
    }


  }

}
