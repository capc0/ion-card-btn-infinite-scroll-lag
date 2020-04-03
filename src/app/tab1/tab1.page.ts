import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    counter = 0;
    data: string[] = ['initial1', 'initial2', 'initial3', 'initial4'];
  
    constructor() {}
  
    loadData(event) {
      console.log(event);
      setTimeout(() => {
        if (this.counter < 50) {
          this.data.push(`${this.counter++}`);
          this.data.push(`${this.counter++}`);
          this.data.push(`${this.counter++}`);
          this.data.push(`${this.counter++}`);
          this.data.push(`${this.counter++}`);
          this.data.push(`${this.counter++}`);
          this.data.push(`${this.counter++}`);
          this.data.push(`${this.counter++}`);
        }
        
  
        event.target.complete();
      }, 500);
    }

}
