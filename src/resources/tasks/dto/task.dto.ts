import { IsOptional, IsString } from "class-validator"

interface CreateTaskDto {
  readonly userId: string | null,
  readonly boardId: string,
  readonly columnId: string,
  readonly title: string,
  readonly order: number,
  readonly description: string,
}

class UpdateTaskDto {
  @IsString()
  @IsOptional()
    userId?: string | null;
    
  @IsString()
  @IsOptional()
    boardId?: string;
    
  @IsString()
  @IsOptional()
    columnId?: string;
    
  @IsString()
  @IsOptional()
    title?: string;
    
  @IsString()
  @IsOptional()
    order?: number;
    
  @IsString()
  @IsOptional()
    description?: string;
}

export {
  CreateTaskDto,
  UpdateTaskDto,
}