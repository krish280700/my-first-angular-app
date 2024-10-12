import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MasterComponent } from './layout/master/master.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MasterComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-angular-app';

  @ViewChild('movemouse') mousecursor!: ElementRef;
  @HostListener('document:mousemove', ['$event']) 

  onMouseMove(e:any){
    var x = e.clientX;
    var y = e.clientY;
    this.mousecursor.nativeElement.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
  }
}
