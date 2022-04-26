import{IsNumber, IsString} from 'class-validator';
import{PartialType} from '@nestjs/mapped-types'
import { CreateMovieDTO } from './create-movie.dto';

// export class UpdateMovieDTO {
// @IsString()
//     readonly title? : string;
// @IsNumber()    
//     readonly year? : number;
// @IsString({each : true})
//     readonly genres? : string[];
// }

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
//PartialType 은 nestjs의 패키지로 일반 상속받는 dto의 내용을 따르지만 내용만 선택 사항으로 바꿔준다.

