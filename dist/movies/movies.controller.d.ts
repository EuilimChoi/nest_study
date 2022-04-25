export declare class MoviesController {
    getAll(): string;
    search(searchingYear: String): string;
    getOne(id: String): string;
    createmovie(movieData: any): any;
    patchingdata(movieId: String, updateData: any): any;
}
