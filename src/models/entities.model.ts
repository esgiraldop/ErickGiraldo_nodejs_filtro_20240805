import {
    AutoIncrement,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model,
    HasOne,
} from "sequelize-typescript";
import { Permissions } from "./permissions.model";
import { Roles } from "./roles.model";

@Table({
    tableName: "entities",
    timestamps: true
})
export class Entities extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
    })
    name!: string;

    @HasOne(() => Permissions)
    roles!: Roles;
}