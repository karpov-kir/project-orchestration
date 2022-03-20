import { Exclude } from 'class-transformer';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('texts')
export class Text {
  @PrimaryGeneratedColumn()
  @Exclude()
  pk!: number;

  @Column({
    length: 20,
  })
  @Index({ unique: true })
  id!: string;

  @Column({
    length: 500,
  })
  title!: string;

  @Column({
    length: 4000,
  })
  description!: string;

  @Column({
    length: 4000,
  })
  text!: string;

  @Column()
  allowShowingFirstLetters!: boolean;

  @Column()
  allowShowingText!: boolean;
}
