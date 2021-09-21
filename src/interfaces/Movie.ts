/* Manually deduced movie interface, create an automated-test. */
interface Movie {
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
}

export default Movie;