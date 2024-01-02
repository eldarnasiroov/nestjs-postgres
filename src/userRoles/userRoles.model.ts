import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { User } from "src/users/users.model";

@Table({ tableName: "user-roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: 1, description: "Идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @ApiProperty({
    example: 1,
    description: "Идентификатор роли",
  })
  @Column({ type: DataType.INTEGER })
  roleId: string;

  @ForeignKey(() => User)
  @ApiProperty({ example: 1, description: "Идентификатор пользователя" })
  @Column({ type: DataType.STRING, allowNull: false })
  userId: string;
}
