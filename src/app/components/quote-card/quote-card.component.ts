import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteCardComponent implements OnInit {

  @Input() imagePath: string;

  @ViewChild('article', { static: false }) article: ElementRef;

  constructor() { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e) {
    const { x, y, width, height } = this.article.nativeElement.getBoundingClientRect();
    const cx = x + width / 2;
    const cy = y + height / 2;
    const { pageX, pageY } = e;
    const dx = (cx - pageX) / (width / 2);
    const dy = (cy - pageY) / (height / 2);

    this.article.nativeElement.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.article.nativeElement.style.transform = 'initial';
  }

  ngOnInit(): void {}

}
