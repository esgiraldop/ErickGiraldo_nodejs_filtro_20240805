import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model,
    HasMany,
    ForeignKey
} from "sequelize-typescript";
// import { ProductCard } from "./productCart.model";
import { Product } from "./product.model";

@Table({
    tableName: "productCarts",
    timestamps: true
})
export class Product extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.NUMBER,
    })
    cartId!: number;

    @Column({
        type: DataType.STRING,
    })
    price!: string;

    @AllowNull
    @Column({
        type: DataType.STRING,
    })
    description!: string;

    @Column({
        type: DataType.INTEGER,
    })
    stock!: number;

    @HasMany(() => ProductCard)
    sales!: ProductCard[];
}