// src/deliveryman/deliveryman.entity.ts
import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
 
@Entity('deliverymen')
export class DeliverymanEntity {
  @PrimaryGeneratedColumn()
  id: number;
 
  // Task-3 schema fields
  @Column({ length: 100, unique: true })
  username: string;
 
  @Column({ length: 150 })
  fullName: string;
 
  @Column({ default: false })
  isActive: boolean;
 
  // Extra fields to keep previous tasks working
  @Column({ nullable: true, length: 150 })
  password: string;
 
  @Column({ nullable: true, length: 20 })
  phone: string;
 
  @Column({ nullable: true })
  documentUrl: string;
 
  @BeforeInsert()
  normalizeUsername() {
    if (this.username) {
      this.username = this.username.toLowerCase().trim();
    }
    if (this.fullName) {
      this.fullName = this.fullName.trim();
    }
  }
}