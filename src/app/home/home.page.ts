import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  peliculas = [];
  
  /* [
    {
      titulo: "Matrix",
      anio: 1999,
      director: "Hermanas X",
      imagen: "https://i.blogs.es/4b103d/the-matrix-online/1366_2000.jpeg"
    },
    {
      titulo: "28 días después",
      anio: 2003,
      director: "Danny Boyle",
      imagen: "http://4.bp.blogspot.com/_Vz9Dc1xzIBU/TKvBwXl2LiI/AAAAAAAAAH0/Gb12ZoDdWgg/s1600/28+days+later+1.jpg"
    },
  ]; */

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(){
    this.peliculasService.peliculas.subscribe(pel => {
      this.peliculas = pel;
    });
    this.peliculasService.getPeliculas();
  }
}
