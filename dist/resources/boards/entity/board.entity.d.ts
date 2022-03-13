import { BaseEntity } from "typeorm";
import { Task } from "../../tasks/entity/task.entity";
import { Columns } from "../dto/board.dto";
export declare class Board extends BaseEntity {
    id: string;
    title: string;
    columns: Columns[];
    tasks: Task[];
}
