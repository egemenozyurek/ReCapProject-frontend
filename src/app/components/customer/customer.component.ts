import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../models/entities/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getAllCustomer();
  }
  getAllCustomer() {
    this.customerService.getAllCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }
}
