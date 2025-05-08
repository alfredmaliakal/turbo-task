import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../_service/master.service';
import { products } from '../../_model/task';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-product',
  imports: [CommonModule, TableModule,TagModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  productlist!: products[];
  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.service.Loadproducts().subscribe((item) => {
      console.log(item);
     this.productlist = item;
    });
  }
}
