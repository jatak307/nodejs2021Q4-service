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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const board_entity_1 = require("./entity/board.entity");
let BoardsService = class BoardsService {
    constructor(boardRepo) {
        this.boardRepo = boardRepo;
    }
    async getAllBoards() {
        const allBoards = await this.boardRepo.find();
        return allBoards;
    }
    async getBoardById(id) {
        const board = await this.boardRepo.findOne(id);
        if (!board) {
            throw new common_1.HttpException(`Board with id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return board;
    }
    async createNewBoard(board) {
        const newBoard = this.boardRepo.create(Object.assign({}, board));
        await this.boardRepo.save(newBoard);
        return newBoard;
    }
    async updateBoard(id, board) {
        await this.boardRepo.update(id, board);
        const updatedBoard = await this.getBoardById(id);
        return updatedBoard;
    }
    async deleteBoard(id) {
        await this.boardRepo.delete(id);
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(board_entity_1.Board)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map