import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'custom-operator';
  ngOnInit(): void {
    const pow = of(1,2,3,4,5,6,7,8,9).pipe(this.pow(2));
    pow.subscribe(x=> console.log(x))
  }

  pow = (n: number) => (source: Observable<any>) =>
    new Observable(observer => {
      return source.subscribe({
        next(value) {
          observer.next(Math.pow(value,n))

        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        }
      });
    })
}
