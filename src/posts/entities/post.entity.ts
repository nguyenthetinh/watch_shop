import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, Index } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Category } from "../../categories/entities/category.entity"

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column('text', {array: true})
  public paragraphs: string[];

  @Column()
  public title: string;

  @Index('post_authorId_index_x1')
  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;

  @ManyToMany(() => Category, (category: Category) => category.posts)
  @JoinTable()
  public categories: Category[];
}
