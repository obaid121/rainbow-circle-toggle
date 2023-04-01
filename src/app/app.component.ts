import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Rainbow Angular";
  arr = [1, 2, 3, 4, 5, 6, 7];
  selected = {};

  clickCircle(ind) {
    switch (ind) {
      case 1: {
        this.selected[ind]
          ? (this.selected[ind] = "")
          : (this.selected[ind] = "red");
        break;
      }
      case 2: {
        this.selected[ind]
          ? (this.selected[ind] = "")
          : (this.selected[ind] = "yellow");
        break;
      }
      case 3: {
        this.selected[ind]
          ? (this.selected[ind] = "")
          : (this.selected[ind] = "orange");
        break;
      }
      case 4: {
        this.selected[ind]
          ? (this.selected[ind] = "")
          : (this.selected[ind] = "green");
        break;
      }
      case 5: {
        this.selected[ind]
          ? (this.selected[ind] = "")
          : (this.selected[ind] = "blue");
        break;
      }
      case 6: {
        this.selected[ind]
          ? (this.selected[ind] = "")
          : (this.selected[ind] = "darkblue");
        break;
      }
      case 7: {
        this.selected[ind]
          ? (this.selected[ind] = "")
          : (this.selected[ind] = "pink");
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }
}
// #ff0000, #ffa500, #ffff00,
//   #008000, #0000ff, #4b0082, #ee82ee
