import { Component } from '@angular/core';
import { NgForOf, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit" ,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 150s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only " +
        "five centuries, but also the leap into electronic typesetting, remaining essential ly unchanged. It was popularised in the 1960s With the release" +
        "of Letraset sheets containing Lorem Ipsum passages, and more recently With desktop publishing software like Aldus PageMaker including versions of" +
        "Lorem Ipsum. " ,
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue"],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w 592,f_auto/t_product vl/i1-6654S5a5-45de-4efb-945f-c1852b8240d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg" ,
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Nike React Infinity Run Flyknit 2" ,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 150s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only " +
        "five centuries, but also the leap into electronic typesetting, remaining essential ly unchanged. It was popularised in the 1960s With the release" +
        "of Letraset sheets containing Lorem Ipsum passages, and more recently With desktop publishing software like Aldus PageMaker including versions of" +
        "Lorem Ipsum. " ,
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue"],
      price: 160,
      discountPrice: 120,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w 592,f_auto/t_product vl/i1-6654S5a5-45de-4efb-945f-c1852b8240d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg" ,
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 3,
      name: "Nike React Infinity Run Flyknit 3" ,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 150s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only " +
        "five centuries, but also the leap into electronic typesetting, remaining essential ly unchanged. It was popularised in the 1960s With the release" +
        "of Letraset sheets containing Lorem Ipsum passages, and more recently With desktop publishing software like Aldus PageMaker including versions of" +
        "Lorem Ipsum. " ,
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue"],
      price: 160,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w 592,f_auto/t_product vl/i1-6654S5a5-45de-4efb-945f-c1852b8240d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg" ,
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 3,
      name: "Nike React Infinity Run Flyknit 3" ,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 150s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only " +
        "five centuries, but also the leap into electronic typesetting, remaining essential ly unchanged. It was popularised in the 1960s With the release" +
        "of Letraset sheets containing Lorem Ipsum passages, and more recently With desktop publishing software like Aldus PageMaker including versions of" +
        "Lorem Ipsum. " ,
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue"],
      price: 160,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w 592,f_auto/t_product vl/i1-6654S5a5-45de-4efb-945f-c1852b8240d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg" ,
      slug: "nike-react-infinity-run-flyknit"
    }

  ]

  calculateDiscount(discountedPrice: number, originalPrice: number){
    return (100 - (discountedPrice / originalPrice * 100)).toFixed(0);
  }

}
