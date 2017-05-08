import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {Post} from "./post";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    private blogPosts: Post[];
    private newPost: Post;

    constructor(private http:Http) {
        this.newPost = new Post();
    }

    title = 'Angular Blog!';

    ngOnInit() {
        this.getData();
    }

    getData() {
        console.log("HTTP GET");
        this.http.get('assets/fileService.php')
            .subscribe(res => this.parsePosts(res.json()))
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
        console.log(this.newPost);
        this.http.post('assets/fileService.php', this.newPost)
            .subscribe(res => this.blogPosts = res.json())
    }
}
