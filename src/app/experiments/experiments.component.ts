import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: string = null;
  experiments: string[] = ["Mars soil sample","Plant growth in habitat","Human bone density"];

  constructor() { }

  ngOnInit() {
  }

  add(experiment: string) {
    if (!this.experiments.includes(experiment)) {
      // console.log("FUCKING WORK, GOD DAMMIT!!!!!!!!!");
      this.experiments.push(experiment);
    } else {
      alert("This experiment is already accounted for.");
    }
  }

  remove(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }

  edit(item: string) {
    this.experimentBeingEdited = item;
  }

  save(item: string) {
    this.experimentBeingEdited = null;
  }

}