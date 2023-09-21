import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { IdeationService } from "./ideation.service";
import { CreateIdeationDto } from "./dto/create-ideation.dto";
import { UpdateIdeationDto } from "./dto/update-ideation.dto";

@Controller("voyage")
export class IdeationController {
    constructor(private readonly ideationService: IdeationService) {}

    @Post()
    create(@Body() createIdeationDto: CreateIdeationDto) {
        return this.ideationService.create(createIdeationDto);
    }

    @Get()
    findAll() {
        return this.ideationService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.ideationService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateIdeationDto: UpdateIdeationDto,
    ) {
        return this.ideationService.update(+id, updateIdeationDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.ideationService.remove(+id);
    }
}
