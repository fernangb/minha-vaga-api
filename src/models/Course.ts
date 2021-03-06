import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Building from './Building';

@Entity('courses')
class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  initials: string;

  @Column()
  location: string;

  @Column()
  building_id: string;

  @ManyToOne(() => Building)
  @JoinColumn({ name: 'building_id' })
  building: Building;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Course;
