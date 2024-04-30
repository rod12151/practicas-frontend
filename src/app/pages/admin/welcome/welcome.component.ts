import { Component, OnInit } from '@angular/core';
import { contractallGrafic, generoGrafic } from 'src/app/models/graficsModels';
import { GraficContractService } from 'src/app/services/grafic/grafic-contract.service';
import { GraficGeneroService } from 'src/app/services/grafic/grafic-genero.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  dataAllGeneroGrafic?: generoGrafic[];
  dataContractAllServiceGrafic?: contractallGrafic;
  dataContractAllregime?: contractallGrafic;
  dataContractAllCondicion?: contractallGrafic;
  vergraficas: boolean = false

  constructor(
    private graficGender: GraficGeneroService,
    private graficContract: GraficContractService
  ) { }
  ngOnInit(): void {
    this.datosAllGenero();
    this.datosAllService();

    this.datosAllRegime();

    this.datosAllCondicion();
  }


  datosAllGenero() {
    this.graficGender.getDataGenderAllService().subscribe({
      next: data => {
        this.dataAllGeneroGrafic = data;

      },
      error: e => {
        console.log(e)
      }
    })
  }
  datosAllService() {
    this.graficContract.getDataContractAllService().subscribe({
      next: dat => {
        this.dataContractAllServiceGrafic = dat
        console.log(dat)
      },
      error: e => {
        console.error(e)
      }
    })

  }
  datosAllRegime() {
    this.graficContract.getDataContractAllRegime().subscribe({
      next: data => {

        this.dataContractAllregime = data
      },
      error: e => {
        console.error(e)
      }
    })

  }
  datosAllCondicion() {
    this.graficContract.getDataContractAllCondicion().subscribe({
      next: data => {

        this.dataContractAllCondicion = data
      },
      error: e => {
        console.error(e)
      }
    })

  }
  vergrafica() {
    this.vergraficas = !this.vergraficas;
    if (this.vergraficas) {
      this.datosAllGenero();
      this.datosAllService();
      this.datosAllRegime();
      this.datosAllCondicion();
    }
  }

}
