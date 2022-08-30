import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   experOnBoard: string[] = [];
   maxExperiments: number = 4;

   constructor() { }

   ngOnInit() { }

   addExperiment(experiment) {
    if(!this.experOnBoard.includes(experiment) && this.experOnBoard.length < this.maxExperiments) {
      this.experOnBoard.push(experiment);
    }
   }

   removeExperiment(experiment) {
    let index = this.experOnBoard.indexOf(experiment);
    this.experOnBoard.splice(index, 1);
   }

   resetExperiments() {
    this.experOnBoard = [];
   }

}
