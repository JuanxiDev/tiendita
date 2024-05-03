import { Component, OnInit } from '@angular/core';
import { Coches } from '../../interfaces/product.model';
import { MyProductComponent } from '../../Components/my-product/my-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  productos: Coches[] = [
    { nombreProducto: "Chevrolet Corvette C8", modelo: "2023", kilometraje: "2.500", ubicacion: "Usaquén", precio: "250'000.000", imagen: "https://hips.hearstapps.com/hmg-prod/images/corvette-stingray-2020-5-1563549573.jpg?crop=0.768xw:0.620xh;0.131xw,0.193xh&resize=1200:*", rating:{ rate: 8.0} },
    { nombreProducto: "Dodge Charger SRT Hellcat", modelo: "2020", kilometraje: "15.000", ubicacion: "Kennedy", "precio": "180'000.000", imagen: "https://hips.hearstapps.com/hmg-prod/images/2021-dodge-charger-srt-hellcat-redeye-103-1593634315.jpg?crop=0.769xw:0.577xh;0.0977xw,0.205xh&resize=1200:*", rating:{ rate: 8.0} },
    { nombreProducto: "Tesla Model 3", modelo: "2021", kilometraje: "7.000", ubicacion: "Engativá", precio: "120'000.000", imagen: "https://www.carscoops.com/wp-content/uploads/2020/10/2021-Tesla-Model-3-6-1024x555.jpg", rating:{ rate: 8.0}  },
    { nombreProducto: "BMW M4 Competition", modelo: "2019", kilometraje: "20.000", ubicacion: "Teusaquillo", precio: "170'000.000", imagen: "https://mediacloud.carbuyer.co.uk/image/private/s--zEMQ_ToD--/f_auto,t_content-image-full-desktop@1/v1601393556/carbuyer/2020/09/p90399363_highres.jpg", rating:{ rate: 8.0} },
    { nombreProducto: "Audi R8 V10 Plus", modelo: "2022", kilometraje: "1.000", ubicacion: "Fontibón", precio: "300'000.000", imagen: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/r8-ab-0196.jpg?itok=4UO3NwiP", rating:{ rate: 8.0} },
    { nombreProducto: "Mercedes-AMG GT", modelo: "2020", kilometraje: "8.000", ubicacion: "Tunjuelito", precio: "230'000.000", imagen: "https://www.hdwallpapers.in/thumbs/2020/mercedes_amg_gt_black_series_2020_4k_5k_hd-t2.jpg", rating:{ rate: 8.0} },
    { nombreProducto: "Porsche 911 Turbo S", modelo: "2021", kilometraje: "5.000", ubicacion: "Suba", precio: "400'000.000", imagen: "https://www.thedrive.com/content/2020/09/Guards_Red_911_Turbo_S___026.jpg?quality=85&auto=webp&optimize=high&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1920", rating:{ rate: 8.0} },
    { nombreProducto: "Lamborghini Huracan EVO", modelo: "2022", kilometraje: "3.500", ubicacion: "Bosa", precio: "500'000.000", imagen: "https://cdn.motor1.com/images/mgl/JYbWM/s2/lamborghini-huracan-evo-feature.webp", rating:{ rate: 8.0} }
  ];

  ngOnInit() {
    console.log("si carga");
    let prod: Coches = { 
      nombreProducto: "Ford Mustang GT", 
      modelo: "2022",
       kilometraje: "10.000", 
       ubicacion: "Chapinero", 
       precio: "200'000.000", 
       imagen: "https://wallpapercg.com/download/ford-mustang-shelby-gt500-5k-cgi--16955.jpg", 
       rating:{ rate: 8.0} 
    }

    this.productos.push(prod);    

  }

  AgregarProducto(product: Coches){
    this.productos.push(product)
  }

}
