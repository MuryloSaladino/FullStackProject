import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string | undefined

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string | undefined

    @Column({ type: 'varchar', length: 20, unique: true})
    phone: string | undefined

    @Column({ type: 'date', nullable: true })
    createdAt: string | null

    @BeforeInsert()
    setAtributes() {
        const date = new Date() 
        this.createdAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    @ManyToOne(() => User)
    user: User
}

export default Contact