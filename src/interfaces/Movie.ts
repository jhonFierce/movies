/* Manually deduced movie interface, create an automated-test. */
class Movie {
    year: number;
    title: string;
    id: number;
    favorite: boolean;
    info: {
        directors?: string[];
        release_date?: string;
        rating?: number;
        genres?: string[];
        image_url?: string;
        plot?: string;
        rank?: number;
        running_time_secs?: number;
        actors?: string[];
    }

    constructor() {
        this.year = 0;
        this.title = "";
        this.id = 0;
        this.favorite = false;
        this.info = {
            directors: [],
            release_date: "",
            rating: 0,
            genres: [],
            image_url: "",
            plot: "",
            rank: 0,
            running_time_secs: 0,
            actors: [],
        }
    }
}

export default Movie;