import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { getEnvironmentData } from 'worker_threads';


@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies!";
    }
    
    @Get('search')
    search(@Query("year") searchingYear : String){
        return `Searching for a movie after ${searchingYear} `
    }

    @Get("/:id")
    getOne(@Param('id') id : String){
        return `This will return ${id}!`
    }

    @Post()
    createmovie(@Body() movieData){
        console.log(movieData.name)
        return movieData
    }

    @Patch('/:id')
    patchingdata(@Param('id') movieId : String, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData
        }
    }
}
