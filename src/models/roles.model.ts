import {
    AutoIncrement,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model,
    HasMany,
    HasOne
} from "sequelize-typescript";
import { Users } from "./users.model";
import { Permissions } from "./permissions.model";

@Table({
    tableName: "roles",
    timestamps: true
})
export class Roles extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),
    })
    name!: string;

    @HasMany(() => Users)
    users!: Users;

    @HasOne(() => Permissions)
    permissions!: Permissions;
}