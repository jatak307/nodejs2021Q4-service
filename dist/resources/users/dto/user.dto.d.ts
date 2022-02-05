interface CreateUserDto {
    readonly name: string;
    readonly login: string;
    readonly password: string;
}
declare class UpdateUserDto {
    name?: string;
    login?: string;
    password?: string;
}
export { CreateUserDto, UpdateUserDto };
