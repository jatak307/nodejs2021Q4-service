import { BaseEntity } from "typeorm";
import { Columns } from "../dto/board.dto";
export declare class Board extends BaseEntity {
    id: string;
    title: string;
    columns: Columns[];
}
