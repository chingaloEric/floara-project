import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: true,
    //immediateAngularModelUpdate : true,
    events : {
      'froalaEditor.focus' : function(e, editor) {
        console.log(editor.selection.get());
      }
    }
  }

  title = 'floara-project';
}
