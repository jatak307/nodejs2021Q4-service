interface CreateUserDto {
    readonly name: string;
    readonly login: string;
    password: string;
}
declare class UpdateUserDto {
    name?: string;
    login?: string;
    password?: string;
}
export { CreateUserDto, UpdateUserDto };
