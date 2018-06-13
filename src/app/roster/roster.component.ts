import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class Roster {
  @Input() volunteers;
  @Input() locked;
  @Output() onWorkingChanged = new EventEmitter<String>();
  @Output() onDelete = new EventEmitter<String>();
  @Output() onEdit = new EventEmitter<String>();
  @Output() onOpenAuth = new EventEmitter<Boolean>();
  @Output() onToggleLock = new EventEmitter<Boolean>();
  availabilityList = [];

  toggleWorking(person) {
    this.onWorkingChanged.emit(JSON.stringify(person));
  }

  delete(person) {
    this.onDelete.emit(JSON.stringify(person));
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
