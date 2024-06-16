import { FormResponseDto } from "../../global/dtos/FormResponse.dto";
import { ApiProperty } from "@nestjs/swagger";
import {
    IsArray,
    IsNotEmpty,
    IsNumber,
    Max,
    Min,
    ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

export class CreateCheckinFormDto {
    @ApiProperty({
        description: "voyage team member id, not userId",
        example: 1,
    })
    @IsNotEmpty()
    voyageTeamMemberId: number;

    @ApiProperty({
        description: "sprint id, not sprint number",
        example: 1,
    })
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(6)
    sprintId: number;

    @ApiProperty({
        description: "An array of form responses",
        example: [
            { questionId: 11, text: "All" },
            { questionId: 12, text: "Deploy app" },
        ],
    })
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => FormResponseDto)
    @IsNotEmpty()
    responses: FormResponseDto[];
}
