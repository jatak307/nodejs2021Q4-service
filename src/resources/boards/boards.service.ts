import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../tasks/entity/task.entity';
import { CreateBoardDto } from './dto/board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entity/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) private boardRepo: Repository<Board>, 
    @InjectRepository(Task) private tasksRepo: Repository<Task>
  ) {}

  async getAllBoards(): Promise<Board[]> {
    const allBoards = await this.boardRepo.find();
    return allBoards;
  }

  async getBoardById(id: string): Promise<Board> {
    const board = await this.boardRepo.findOne(id);
    if (!board) {
      throw new HttpException(`Board with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return board;
  }

  async createNewBoard(board: CreateBoardDto): Promise<Board> {
    const newBoard = this.boardRepo.create({ ...board });
    await this.boardRepo.save(newBoard);
    return newBoard;
  }

  async updateBoard(id: string, board: UpdateBoardDto): Promise<Board | undefined> {
    await this.boardRepo.update(id, board);
    const updatedBoard = await this.getBoardById(id);
    return updatedBoard;
  }

  async deleteBoard(id: string): Promise<void> {
    await this.tasksRepo.delete({ boardId: id });
    await this.boardRepo.delete(id);
  }
}
