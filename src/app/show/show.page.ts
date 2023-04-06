import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//Importacion de modelo de datos
import Post from '../post.model';
import { PostService } from '../post.service';
//Servicio Post



@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShowPage implements OnInit {
  Posts: Post[]

  constructor( private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) =>{
      this.Posts = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        }
      });
    });
  }
//Delete Post
  deleteRow = (post) => this.postService.deletePost(post);

}
