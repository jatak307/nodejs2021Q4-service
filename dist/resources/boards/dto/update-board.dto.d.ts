import { Columns } from "./board.dto";
declare class UpdateBoardDto {
    id?: string;
    title?: string;
    columns?: Columns[];
}
export { UpdateBoardDto, };
