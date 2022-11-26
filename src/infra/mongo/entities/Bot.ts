import { Column, Entity, ObjectIdColumn } from 'typeorm'

@Entity('bot')
export class Bot {
  @ObjectIdColumn({ name: '_id' })
  id!: string

  @Column()
  name!: string
}
