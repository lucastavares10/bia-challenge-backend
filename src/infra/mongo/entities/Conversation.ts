import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('conversation')
export class Conversation {
  @ObjectIdColumn({ name: '_id' })
  id!: string

  @Column()
  botId!: string

  @Column()
  socketId!: string

  @Column()
  createdAt!: Date
}
