import {
    AutoIncrement,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
import { ProductCart } from "./productCarts.model";

@Table({
    tableName: "orders",
    timestamps: true
})
export class Orders extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    // @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    userId?: number;

    @ForeignKey(() => ProductCart)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    productCartId?: number;

    @Column({
        type: DataType.DECIMAL(10,2),
    })
    total!: number;

    @BelongsTo(() => ProductCart)
    productCarts?: ProductCart;
}