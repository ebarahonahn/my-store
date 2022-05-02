import { Component } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  widthImg = 10;
  name = 'Edgar Barahona';
  age = 50;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;

  register = {
    name: '',
    email: '',
    password:''
  }

  person = {
    name: 'Edgar Barahona',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  names: string[] = ['edgar', 'ernesto', 'barahona', 'flores'];
  newName: string = '';
  box={
    width: 100,
    height: 100,
    background: 'red'
  }

  products: Product[] = [
    {
      name: 'El Mejor Juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta',
      price: 100,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Albunes',
      price: 50,
      image: './assets/images/album.jpg'
    },
    {
      name: 'libros',
      price: 25,
      image: './assets/images/libros.jpg'
    },
    {
      name: 'Avion',
      price: 1500,
      image: './assets/images/avion.jpg'
    },
    {
      name: 'Camion',
      price: 1500,
      image: './assets/images/camion.jpg'
    },
    {
      name: 'Perro',
      price: 1500,
      image: './assets/images/perro.jpg'
    },
    {
      name: 'Gato',
      price: 1500,
      image: './assets/images/gato.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index:number){
    this.names.splice(index,1);

  }

  onRegister(){
    console.log(this.register)
  }


}
