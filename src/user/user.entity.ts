import { Entity, Column, PrimaryGeneratedColumn, Timestamp} from 'typeorm'

@Entity('users')
export class UserEntity {
	@PrimaryGeneratedColumn('uuid') id: string

    @Column('varchar', { length: 50 })
    firstname: string

    @Column('varchar', { length: 50 })
    lastname: string

    @Column('varchar', { length: 256 })
    email: string

    @Column('uuid')
    roleid: string
    
    @Column('uuid')
    createdby: string

    @Column('uuid')
    updatedby: string

    @Column('uuid')
    deletedby: string

    @Column('timestamp')
    createdat: Timestamp

    @Column('timestamp')
    updatedat: Timestamp

    @Column('timestamp')
    deletedat: Timestamp

    @Column('bit')
    isdeleted: BinaryType
}