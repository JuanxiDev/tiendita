export interface Coches {
    nombreProducto: string;
    modelo: string;
    kilometraje: string;
    ubicacion:string;
    precio: string;
    imagen:string;
    rating: Rating;
  } 
  

export interface Rating{
  rate: number
}
  // atributos coches