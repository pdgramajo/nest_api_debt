import { Entity, Column, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectId;
    @Column()
    name: string;
    @Column()
    phone: number;
    @Column()
    address: string;
    @Column({ default: false })
    deleted: boolean;
}
