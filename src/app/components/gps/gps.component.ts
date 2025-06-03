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
  center: google.maps.LatLngLiteral = {
    lat: -8.11753512553773,
    lng: -34.8996876037263,
  };

  markerLatLong: google.maps.LatLngLiteral = {
    lat: -8.117748328244138,
    lng: -34.90020056865428,
  };

  isAlert: boolean = false;

  constructor(private readonly _gpsService: GpsService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this._gpsService.getLocation().subscribe((response) => {
      this.dataResponse = response;
    });
  }
}
