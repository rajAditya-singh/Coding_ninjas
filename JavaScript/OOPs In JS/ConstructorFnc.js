function movie(title, year){
    const movieobje={
        title:title,
        year:year,
        getdetails:function(){
            console.log(`Title: ${this.title}, Year: ${this.year}`);
        }
    }
    return movieobje;
}
const movie2 = movie("Avengers", 2012)
const movie3 = movie("Iron Man", 2008)

movie2.getdetails();
movie3.getdetails();

//CONSTRUCTOR FUNCTION

function Movies(title, year){
    this.title=title;
    this.year=year;
    this.getmoviedetails= function(){
        console.log(`Title: ${this.title}, Year: ${this.year}`)
    }
}

const movie4 = new Movies("Avatars", 2012);
movie4.getmoviedetails();

const movie5 = new Movies("Titanic", 1997);
movie5.getmoviedetails();