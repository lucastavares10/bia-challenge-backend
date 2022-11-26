import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('user')
export class User {
  @ObjectIdColumn({ name: '_id' })
  id!: string

  @Column()
  name!: string

  @Column()
  phone!: string
}
