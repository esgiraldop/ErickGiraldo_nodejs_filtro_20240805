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
import { ProductCard } from "./productCart.model";

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
        type: DataType.STRING,
    })
    name!: string;

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