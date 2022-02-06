import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entity/board.entity';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    getBoards(): Promise<Board[]>;
    getBoard(id: string): Promise<Board>;
    createBoard(createDto: CreateBoardDto): Promise<Partial<Board>>;
    update(id: string, updateDto: UpdateBoardDto): Promise<Board | undefined>;
    delete(id: string): Promise<void>;
}
