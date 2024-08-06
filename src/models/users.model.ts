import {
    AutoIncrement,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model,
    ForeignKey,
    BelongsTo,
    HasMany
} from "sequelize-typescript";
import { Orders } from "./orders.model";

@Table({
    tableName: "users",
    timestamps: true
})
export class Users extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),
    })
    email!: string;

    @Column({
        type: DataType.STRING(200),
    })
    password!: string;

    // @ForeignKey(() => Roles)
    @Column({
        type: DataType.INTEGER,
    })
    roleId!: number;

    @HasMany(() => Orders)
    orders!: Orders;
}