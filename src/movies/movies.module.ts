import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({})
export class MoviesModule {
    import : []
    controllers : [MoviesController]
    providers : [MoviesService]
}
