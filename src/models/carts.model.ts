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
import { Users } from "./users.model";
import { ProductCart } from "./productCarts.model";

@Table({
    tableName: "carts",
    timestamps: true
})
export class Carts extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER,
    })
    userId!: number;

    @BelongsTo(() => Users)
    users!: Users;

    @HasMany(() => ProductCart)
    productCarts!: ProductCart;
}