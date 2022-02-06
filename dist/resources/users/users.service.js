"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const generate_hash_1 = require("../../common/helpers/generate-hash");
const user_entity_1 = require("./entity/user.entity");
let UsersService = class UsersService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async getAllUsers() {
        const allUsers = await this.userRepo.find();
        return allUsers;
    }
    async getUserById(id) {
        const user = await this.userRepo.findOne(id);
        return user;
    }
    async getUserByLogin(login) {
        const user = await this.userRepo.findOne({ login });
        return user;
    }
    async createNewUser(user) {
        const password = await (0, generate_hash_1.generateHash)(user.password);
        user.password = password;
        const newUser = this.userRepo.create(Object.assign({}, user));
        await this.userRepo.save(newUser);
        return newUser;
    }
    async updateUser(id, user) {
        const currentUser = await this.getUserById(id);
        if (currentUser !== undefined) {
            const password = await (0, generate_hash_1.generateHash)(currentUser.password);
            user.password = password;
        }
        await this.userRepo.update(id, user);
        const updatedUser = await this.getUserById(id);
        return updatedUser;
    }
    async deleteUser(id) {
        await this.userRepo.delete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map