import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../common/guards/auth.guard';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entity/board.entity';

@Controller('boards')
@UseGuards(AuthGuard)
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) { }

  @Get()
  async getBoards(): Promise<Board[]> {
    const allBoards = await this.boardsService.getAllBoards();
    return allBoards;
  }

  @Get(':id')
  async getBoard(@Param('id') id: string): Promise<Board> {
    const board = await this.boardsService.getBoardById(id);
    return board;
  }

  @Post()
  async createBoard(@Body() createDto: CreateBoardDto): Promise<Partial<Board>> {
    const board: Board = await this.boardsService.createNewBoard(createDto);
    return board;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateBoardDto): Promise<Board | undefined> {
    const updatedBoard = await this.boardsService.updateBoard(id, updateDto);
    return updatedBoard;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    await this.boardsService.deleteBoard(id);
  }
}
