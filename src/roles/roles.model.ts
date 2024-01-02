import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Model,
  DataType,
  Table,
  BelongsToMany,
} from "sequelize-typescript";
import { UserRoles } from "src/userRoles/userRoles.model";
import { User } from "src/users/users.model";

interface RoleCreationData {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationData> {
  @ApiProperty({ example: 1, description: "Идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "ADMIN",
    description: "Наименование роли пользователя",
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({
    example: "Администратор",
    description: "Описание роли пользователя",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
