import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/entities/rentalDetail';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: RentalDetail[] = [];
  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getAllRentalDetails();
  }

  getAllRentalDetails() {
    this.rentalService.getAllRentalDetails().subscribe((response) => {
      this.rentals = response.data;
    });
  }
}
