class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSoldMovieTickets = 0;
    }

    newScreening(date, hall, description) {
        let screening = this.screenings.find((sc) => sc.date == date && sc.hall == hall);
        if (screening) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        } else {
            this.screenings.push({ date, hall, description });

            return `New screening of ${this.movieName} is added.`;
        }
    }

    endScreening(date, hall, soldTickets) {
        let screening = this.screenings.find((sc) => sc.date == date && sc.hall == hall);
        if (screening == undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }else{
            let currentProfit = Number(soldTickets) * Number(this.ticketPrice);

            this.totalProfit += currentProfit;
            this.totalSoldMovieTickets += Number(soldTickets);
            let index = 0;
            for(let i = 0; i< this.screenings.length; i++){
                if(this.screenings[i].date == date && this.screenings[i].hall === hall){
                    index  =i;
                    break;
                }
            }
            this.screenings.splice(index, 1);
            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
        }
    }

    toString (){
        let result = `${this.movieName} full information:\n`;
        result+= `Total profit: ${this.totalProfit.toFixed(0)}$` + `\nSold Tickets: ${ this.totalSoldMovieTickets.toFixed(0)}`;
        if(this.screenings.length > 0){
            result += `\nRemaining film screenings:`;
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall)).forEach((sc) => {
               result += `\n${sc.hall} - ${sc.date} - ${sc.description}`
            });
        }else{
            result += "\nNo more screenings!";
        }
        return result;
    }
}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());


