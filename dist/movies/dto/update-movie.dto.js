"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_movie_dto_1 = require("./create-movie.dto");
class UpdateMovieDTO extends (0, mapped_types_1.PartialType)(create_movie_dto_1.CreateMovieDTO) {
}
exports.UpdateMovieDTO = UpdateMovieDTO;
//# sourceMappingURL=update-movie.dto.js.map