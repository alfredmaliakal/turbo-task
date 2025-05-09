import { Role } from "libs/auth/enum/role.enum"

export class CreateUserDto {
    name: string
    role:Role
    orgId:number
}
