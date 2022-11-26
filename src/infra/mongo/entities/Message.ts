import { Column, Entity, ObjectIdColumn } from 'typeorm'

@Entity('message')
export class Message {
  @ObjectIdColumn({ name: '_id' })
  id!: string

  @Column()
  conversationId!: string

  @Column()
  from!: string

  @Column()
  to!: string

  @Column()
  text!: string

  @Column()
  timestamp!: Date
}
