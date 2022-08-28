import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  memberBeingEdited: object = null;
  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    // this.crew.push({ name: memberName, firstMission: isFirst });
    let crewNames: string[] = [];
    for (let member of this.crew) {
      // crewNames.push(member.name);
    }
      // console.log(crewNames);
    if (!crewNames.includes(memberName)) {
      // console.log("FUCKING WORK, GOD DAMMIT!!!!!!!!!");
      this.crew.push({name: memberName, firstMission: isFirst});
    } else {
      alert("This crew member is already accounted for.");
    }
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

}