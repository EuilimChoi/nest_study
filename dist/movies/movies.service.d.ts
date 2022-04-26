import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entitiy';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: string): Movie;
    deleteOne(id: string): void;
    create(movieData: CreateMovieDTO): void;
    update(id: string, updateData: UpdateMovieDTO): void;
}
