import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  private url: string = 'https://jsonplaceholder.typicode.com/photos';

  public photos: Photo[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Photo[]>(this.url).subscribe((response) => {
      this.photos = response;
    })
  }

}
