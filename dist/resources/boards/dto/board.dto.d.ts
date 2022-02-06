interface Columns {
    readonly id: string;
    readonly title: string;
    readonly order: number;
}
declare class CreateBoardDto {
    readonly title: string;
    readonly columns: Columns[];
}
export { Columns, CreateBoardDto, };
