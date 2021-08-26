import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Exclude } from 'class-transformer';
import { Address } from "./address.entity";
import { Post } from "src/posts/entities/post.entity";
import { PublicFile } from "src/files/publicFile.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({unique: true})
  public email: string;

  @Column()
  @Exclude()
  public password: string;

  @Column()
  public name: string;

  @Column()
  public age: number;
  
  @Column()
  public sex: string;

  @OneToOne(() => Address, {
    eager: true,
    cascade: true
  })
  @JoinColumn()
  public address: Address;

  @OneToMany(() => Post, (post: Post) => post.author)
  public posts: Post[];

  @OneToOne(() => PublicFile, {
    eager: true,
    nullable: true
  })
  @JoinColumn()
  public avatar?: PublicFile;
  
}
