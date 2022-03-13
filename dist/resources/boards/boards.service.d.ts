import { Repository } from 'typeorm';
import { Task } from '../tasks/entity/task.entity';
import { CreateBoardDto } from './dto/board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entity/board.entity';
export declare class BoardsService {
    private boardRepo;
    private tasksRepo;
    constructor(boardRepo: Repository<Board>, tasksRepo: Repository<Task>);
    getAllBoards(): Promise<Board[]>;
    getBoardById(id: string): Promise<Board>;
    createNewBoard(board: CreateBoardDto): Promise<Board>;
    updateBoard(id: string, board: UpdateBoardDto): Promise<Board | undefined>;
    deleteBoard(id: string): Promise<void>;
}
