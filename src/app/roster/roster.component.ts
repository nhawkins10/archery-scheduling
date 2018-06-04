import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class Roster {
//  @Input() roster;
  @Input() volunteers;
  @Input() locked;
  @Output() onAvailabilityChanged = new EventEmitter<String>();
  @Output() onEdit = new EventEmitter<String>();
  @Output() onOpenAuth = new EventEmitter<Boolean>();
  @Output() onToggleLock = new EventEmitter<Boolean>();
  availabilityList = [];

//  setAvailability() {
//    this.availabilityList = [];
//
//    if (this.roster && this.volunteers) {
//      for (var count=0; count<this.roster.length; count++) {
//        var available = true;
//        for (var unAvlCount=0; unAvlCount<this.volunteers.length; unAvlCount++) {
//          if (this.volunteers[unAvlCount] == this.roster[count].id) {
//            available = false;
//          }
//        }
//        this.availabilityList.push(
//          {
//          "name": this.roster[count].name,
//          "id": this.roster[count].id,
//          "available": available
//          }
//        );
//      }
//    }
//  }

  toggleAvailable(person) {
    this.onAvailabilityChanged.emit(JSON.stringify(person));
  }

  edit() {
    this.onEdit.emit();
  }

  openAuth() {
    this.onOpenAuth.emit(this.locked);
  }

  logOut() {
    this.onToggleLock.emit(this.locked);
  }

  ngOnInit(): void {
//    this.setAvailability();
  }

  ngOnChanges() {
//     this.setAvailability();
  }
}
