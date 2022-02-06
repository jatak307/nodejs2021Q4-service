import { IsOptional, IsString } from "class-validator";

interface CreateUserDto {
  readonly name: string,
  readonly login: string,
  password: string
}

class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  login?: string;

  @IsString()
  @IsOptional()
  password?: string;
}

export {
  CreateUserDto,
  UpdateUserDto
}