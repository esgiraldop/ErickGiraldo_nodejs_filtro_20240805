import {
    AutoIncrement,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model,
    ForeignKey,
    BelongsTo,
    HasOne
} from "sequelize-typescript";
import { Product } from "./products.model";
import { Orders } from "./orders.model";
import { Carts } from "./carts.model";
@Table({
    tableName: "productCarts",
    timestamps: true
})
export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    id!: number;

    @ForeignKey(() => Carts)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    cartId?: number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    productId?: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    quantity?: number;

    @BelongsTo(() => Product)
    products!: Product;

    @HasOne(() => Orders)
    orders?: Orders[];
}