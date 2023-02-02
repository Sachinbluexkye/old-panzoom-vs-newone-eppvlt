import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  TemplateRef,
  Inject,
  Renderer2
} from "@angular/core";
import panzoom_old from "panzoom";
import panzoom_new from "./lib/panzoom2/panzoom";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("dragBounds", { static: false }) scene: ElementRef;
  @ViewChild("dragBounds2", { static: false }) scene2: ElementRef;

  constructor(public r2: Renderer2){

  }
  ngAfterViewInit() {
    let panzoomv1 = panzoom_old(this.scene.nativeElement, {
      bounds: true,
    });

    let panzoomv2 = panzoom_new(this.scene2.nativeElement, {
      contain: "inside",
        maxScale: 1
    });


      this.r2.listen(this.scene2.nativeElement, 'wheel', (event) => {
        // Do something with 'event'
        panzoomv2.zoomWithWheel(event)
      })
  }

  name = "Angular";
}
