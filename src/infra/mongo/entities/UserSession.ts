import { Column, Entity, ObjectIdColumn } from 'typeorm'

@Entity('user_session')
export class UserSession {
  @ObjectIdColumn({ name: '_id' })
  id!: string

  @Column()
  createdAt!: Date
}
