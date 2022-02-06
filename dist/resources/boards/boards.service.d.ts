import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entity/board.entity';
export declare class BoardsService {
    private boardRepo;
    constructor(boardRepo: Repository<Board>);
    getAllBoards(): Promise<Board[]>;
    getBoardById(id: string): Promise<Board>;
    createNewBoard(board: CreateBoardDto): Promise<Board>;
    updateBoard(id: string, board: UpdateBoardDto): Promise<Board | undefined>;
    deleteBoard(id: string): Promise<void>;
}
