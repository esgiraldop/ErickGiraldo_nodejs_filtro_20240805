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
import { Product } from "./products.model";

@Table({
    tableName: "productCarts",
    timestamps: true
})
export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    // @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
    })
    cartId!: number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
    })
    productId!: number;

    @Column({
        type: DataType.INTEGER,
    })
    quantity!: number;

    @BelongsTo(() => Product)
    products!: Product;
}