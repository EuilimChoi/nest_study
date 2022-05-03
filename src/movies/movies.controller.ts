import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { getEnvironmentData } from 'worker_threads';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entitiy';
import { MoviesService } from './movies.service';


@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}
    
    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param('id') id : string): Movie{
        return this.moviesService.getOne(id);
    }

    @Post()
    createmovie(@Body() movieData : CreateMovieDTO){
        this.moviesService.create(movieData);
        return "created!"
    }

    @Delete(':id')
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patchingdata(@Param('id') movieId : string, @Body() updateData : UpdateMovieDTO){
        return this.moviesService.update(movieId, updateData)
    }

}
