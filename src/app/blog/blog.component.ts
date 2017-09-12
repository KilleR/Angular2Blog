import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {Http} from "@angular/http";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    private blogPosts: Post[];
    private newPost: Post;
    private loggedIn: boolean;
    private loginField: string;
    private loadingBarMode: string;
    private loadingBarShow: boolean;

    constructor(private http:Http) {
        this.newPost = new Post();
        this.loggedIn = false;
        this.loadingBarShow = false;
        this.loadingBarMode = 'indeterminate';
    }


    title = 'Angular 2 Dev Blog!';

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.loadingBarMode = 'indeterminate';
        this.loadingBarShow = true;
        this.http.get('assets/fileService.php')
            .subscribe(res => {
                this.loadingBarMode = 'query';
                this.parsePosts(res.json());
                this.loadingBarShow = false;
            })
    }

    parsePosts(posts) {
        this.blogPosts = posts;
        // for(let i=0; i<this.blogPosts.length; i++) {
        //     this.blogPosts[i].content = this.blogPosts[i].content.replace(new RegExp('\n', 'g'), "<br />")
        // }
    }

    setData() {
        this.http.post('assets/fileService.php', [{name: "fish"},{name: "bors"}])
            .subscribe(res => this.blogPosts = res.json())
    }

    addPost() {
        this.http.post('assets/fileService.php', this.newPost)
            .subscribe(res => {
                this.blogPosts = res.json();
                this.newPost = new Post();
            })
    }

    doLogin(event) {
        this.loginField = event;
        this.http.post('assets/loginService.php', {loginField: this.loginField})
            .subscribe(res => this.checkLogin(res.json()))
    }
    checkLogin(res) {
        this.loginField = '';
        if(typeof res.loggedIn != "undefined") {
            this.loggedIn = true;
        }
    }

}
