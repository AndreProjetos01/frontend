import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { GpsService } from '../../services/gps.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gps',
  standalone: true,
  imports: [RouterLink, GoogleMapsModule, CommonModule, HttpClientModule],
  templateUrl: './gps.component.html',
  styleUrl: './gps.component.scss',
})
export class GpsComponent implements OnInit {
  dataResponse: any;
  isAlert: boolean = false;
  center: google.maps.LatLngLiteral = {
    lat: -8.11753512553773,
    lng: -34.8996876037263,
  };

  markerLatLong: google.maps.LatLngLiteral = {
    lat: -8.117748328244138,
    lng: -34.90020056865428,
  };

   areaDestino = [
    { lat: -8.116557545023289, lng: -34.90061340512893 },
    { lat: -8.11706471483465, lng: -34.89960489450139 },
    { lat: -8.117816174695255, lng: -34.900066234461335 },
    { lat: -8.117497534646908, lng: -34.900803841968184 },
  ];

  constructor(private readonly _gpsService: GpsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getLocation();
    }, 5000);
  }

 getLocation() {
    this._gpsService.getLocation().subscribe((response) => {
      this.dataResponse = response;

      // Atualize as coordenadas do marcador com os dados recebidos (ajuste conforme seu backend)
      this.markerLatLong = {
        lat: response.lat,
        lng: response.lng,
      };

      this.verificarSeEstaNaArea(this.markerLatLong);
    });
  }

  verificarSeEstaNaArea(posicao: google.maps.LatLngLiteral) {
    const ponto = new google.maps.LatLng(posicao.lat, posicao.lng);

    const poligono = new google.maps.Polygon({
      paths: this.areaDestino,
    });

    const dentro = google.maps.geometry.poly.containsLocation(ponto, poligono);

    this.isAlert = !dentro;
  }
}
