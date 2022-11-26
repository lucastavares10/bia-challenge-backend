import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('conversation')
export class Conversation {
  @ObjectIdColumn({ name: '_id' })
  id!: string

  @Column()
  sessionId!: string

  @Column()
  clientId!: string

  @Column()
  createdAt!: Date
}
