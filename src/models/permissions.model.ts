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
import { Roles } from "../models/roles.model";
import { Entities } from "../models/entities.model";

@Table({
    tableName: "permissions",
    timestamps: true
})
export class Permissions extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => Roles)
    @Column({
        type: DataType.INTEGER,
    })
    roleId!: number;

    @ForeignKey(() => Entities)
    @Column({
        type: DataType.INTEGER,
    })
    entityId!: number;

    @Column({
        type: DataType.BOOLEAN,
    })
    canCreate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    canUpdate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    canDelete!: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    canGet!: boolean;

    @BelongsTo(() => Entities)
    entities!: Entities;

    @BelongsTo(() => Roles)
    roles!: Roles;
}