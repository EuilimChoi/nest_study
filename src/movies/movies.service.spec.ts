import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("getAll()", () =>{
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  })

  describe("getOne()", () => {
    
    it('should return a movie', () => {
      service.create({
        title: "test movie",
        genres : ['test'],
        year : 2000
      });
      const movie = service.getOne("1");
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    })
    it('should return 404', () => {
      try{
        service.getOne("555")
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException)
      }
    })
  })

  describe("deleteOne()", () => {

    it('should be delete',() =>{
      service.create({
        title: "test movie",
        genres : ['test'],
        year : 2000
      });
      
      const befordelete = service.getAll();
      service.deleteOne("1");
      const afterdelete = service.getAll();
      expect(afterdelete.length).toEqual(befordelete.length -1 );
    })

    it("should return a 404", () => {
      try{
        service.deleteOne("99999");
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException)
      }
    })
  })

  describe("Update movie data", () => {
    it("Title must be change to New Tilte", () => {
      service.create({
        title: "test movie",
        genres : ['test'],
        year : 2000
      });
  
      service.update("1",{title : 'New title'})

      const newmovietitle = service.getOne("1").title
      expect(newmovietitle).toEqual("New title")
    })

    it("should return a 404", () => {
      try{
        service.update("99999",{});
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException)
      }
    })
  })
});
