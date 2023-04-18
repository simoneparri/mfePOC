import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registry } from '../registry';


@Component({
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {
  @Input() props: Record<string, any>;

  @ViewChild('vc', {read: ElementRef, static: true})
  vc: ElementRef;

  constructor(private route: ActivatedRoute,private hostRef: ElementRef,) { }

  async ngAfterContentInit(): Promise<void> {

    const elementName = this.route.snapshot.data['elementName'];
    const importName = this.route.snapshot.data['importName'];
    const type = this.route.snapshot.data['type'];

    const importFn = registry[importName];
    importFn()
      .then(_ => {
        console.debug(`element ${elementName} [`+type+`] loaded!`)
        if(type === 'vue'){
          // import('./main')
        }
      })
      .catch(err => console.error(`error loading ${elementName}:`, err));

    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);
    if(type==='vue'){
      //trick for reload any times!
      let script = document.createElement('script');
      script.src = 'http://localhost:4205/main.js';
      this.vc.nativeElement.appendChild(script);
    }

  }

}
