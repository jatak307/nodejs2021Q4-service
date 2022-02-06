import { IsOptional, IsString } from "class-validator";
import { Columns } from "./board.dto";

class UpdateBoardDto {
  @IsString()
  @IsOptional()
    id?: string;

  @IsString()
  @IsOptional()
    title?: string;

  @IsString()
  @IsOptional()
    columns?: Columns[];
}

export {
  UpdateBoardDto,
}