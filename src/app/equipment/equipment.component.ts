import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  itemBeingEdited: string = null;
  equipment: string[] = ["Habitat dome","Drones","Food containers","Oxygen tanks"];

  constructor() { }

  ngOnInit() {
  }

  add(newEquip: string) {
    if (!this.equipment.includes(newEquip)) {
      this.equipment.push(newEquip);
    } else {
      alert("This equipment is already accounted for.");
    }
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(item: string) {
    this.itemBeingEdited = null;
  }

}