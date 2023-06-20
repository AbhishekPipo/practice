import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'practice';

 rentalList={
    count: 4,
    titles: "cats, hooward, duck, jack and jill , batman"
  }
  
  theRoom={
    title: "theRoom",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRObn7nRGDUK2zCmeRB--KWRsX6oDR1_qwKUNoCTIvyu0GkStMc"
  }
  wingCommander={
    title: "wingCommander",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXlu-eFmYj1yWwyqburHqEIR72jGOU6D0hoebbCzxt99ROKKur"
  }

  // addRental(movie: any){
  //   this.rentalList.count++;
  //   this.rentalList.titles +=", "+movie.title;
  // }

  onRentMovie(movie: any){
    console.log("onRentMovie");
    this.rentalList.count++;
    this.rentalList.titles +=", "+movie.title;
  }


  onClearRental(){
    this.rentalList.count=0;
    this.rentalList.titles =" ";
  }
}

