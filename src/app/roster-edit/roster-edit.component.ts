import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'roster-edit',
  templateUrl: './roster-edit.component.html',
  styleUrls: ['./roster-edit.component.css']
})
export class RosterEdit {
  @Output() onAddVolunteer = new EventEmitter<String>();
  @Output() onHideEdit = new EventEmitter<String>();
  name = '';
  when = 'BEFORE';
  role = 'RANGE';

  save() {
    if (!this.name) {
      alert('Name is required.');
      return;
    }
    var person = {
      'name': this.name,
      'when': this.when,
      'role': this.role,
      'selected': false
    }
    window.localStorage.setItem('name', this.name);
    this.onAddVolunteer.emit(JSON.stringify(person));
    this.onHideEdit.emit();
  }

  cancel() {
    this.onHideEdit.emit();
  }

  ngOnInit(): void {
    if (localStorage.getItem('name')) {
      this.name = localStorage.getItem('name');
    }
  }
}
