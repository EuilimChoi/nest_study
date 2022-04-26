import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entitiy';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAll(): Movie[];
    getOne(id: string): Movie;
    createmovie(movieData: CreateMovieDTO): string;
    remove(movieId: string): void;
    patchingdata(movieId: string, updateData: UpdateMovieDTO): void;
}
