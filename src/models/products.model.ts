import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model,
    HasMany
} from "sequelize-typescript";
import { ProductCart } from "./productCarts.model";

@Table({
    tableName: "products",
    timestamps: true
})
export class Product extends Model {
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

    @Column({
        type: DataType.DECIMAL(10,2),
    })
    price!: string;

    @AllowNull
    @Column({
        type: DataType.TEXT,
    })
    description!: string;

    @Column({
        type: DataType.INTEGER,
    })
    stock!: number;

    @HasMany(() => ProductCart)
    productCarts!: ProductCart[];
}