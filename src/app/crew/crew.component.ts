import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  imageView: boolean = false;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', dob: "05/26/1971"},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', dob: "10/17/1956"},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', dob:"05/10/1958"},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', dob: "01/07/1941"},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', dob:"11/22/1942"},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', dob: "01/23/1973"},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', dob: "11/03/1970"}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate) {
    if(!this.crew.includes(candidate) && this.crew.length < 3) {
      this.crew.push(candidate);
    } else if (this.crew.includes(candidate)) {
      let index = this.crew.indexOf(candidate);
      this.crew.splice(index,1);
    }
  }

}
