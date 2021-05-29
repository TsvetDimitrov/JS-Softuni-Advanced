function solveClasses() {
    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
            this.allPerformers = [];
        }

        hallEvent(title){
            if(this.events.find((e) => e == title)){
                throw new Error("This event is already added!");
            }else{
                this.events.push(title);
                return "Event is added.";  
            }
        }

        close(){
            this.events = [];
            return `${this.name} hall is closed.`;
        }

        toString(){
            let message = '';
            message = `${this.name} hall - ${ this.capacity }`;
            if(this.events.length > 0){
                message += `\nEvents: ${this.events.join(', ')}`;
            }

            return message;
        }
    }


    class MovieTheater extends Hall{
        constructor(capacity, name, screenSize){
            super(capacity, name);
            this.screenSize = screenSize;
        }

        close(){
            let result = super.close();

            return result + `Аll screenings are over.`;
        }

        toString(){
            let result = super.toString();
            let message = `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;

            return result + message;
        }
    }


    class ConcertHall extends Hall{
        constructor(capacity, name){
            super(capacity, name);
            this.events = [];
        }

        hallEvent( title, performers ){
            if(this.events.includes(title)){
                throw new Error("This event is already added!");
            }else{
                super.hallEvent(title);
                this.allPerformers.push(performers);

                return "Event is added.";
            }
        }

        close(){
            let result = super.close();

            return result + `Аll performances are over.`;
        }

        toString(){
            let result = super.toString();

            if(this.events.length > 0){
                result += `\nPerformers: ${this.allPerformers.join(', ')}.`;
            }
            return result;
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}


 let classes = solveClasses();
let hall = new classes.Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close()); 
console.log('--------')
let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
console.log(movieHall.hallEvent('Top Gun: Maverick')); 
console.log(movieHall.toString());
console.log('--------')

let concert = new classes.ConcertHall(5000, 'Diamond');        
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));  


console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());
