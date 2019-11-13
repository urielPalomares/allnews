import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = [];

  constructor(public _newsService: NewsService) { }

  ngOnInit() {
    this.getNewsList();
  }

  getNewsList() {
    this._newsService.getNewsList().then(async (data: Array<any>) => {
      this.news.push(data)
      console.log(this.news)
    }).catch(err => console.error(err));
  }


}
