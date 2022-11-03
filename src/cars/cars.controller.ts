import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes( ValidationPipe) Validationpipe requiere el class validator y transformer
export class CarsController {

    constructor(
        private readonly carsService:CarsService
    ){}

    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById( @Param('id', new ParseUUIDPipe({ version:'4'})) id: string) {

       return this.carsService.findOneById(id)
    }

    @Post()
    // @UsePipes( ValidationPipe) Validationpipe requiere el class validator y transformer
    createCar( @Body() createCartDto:CreateCarDto ){
        return this.carsService.create(createCartDto)
    }

    @Patch(':id')
    updateCar( 
    @Param('id', ParseUUIDPipe) id: string,
    @Body() UpdateCarDto: UpdateCarDto )
    {
        return this.carsService.update(id, UpdateCarDto);
    }

    @Delete(':id')
    deleteCar( 
    @Param('id', ParseUUIDPipe) id: string)
    {
        return this.carsService.delete(id)
    }
    
}  
