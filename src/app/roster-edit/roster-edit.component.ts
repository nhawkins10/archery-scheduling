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
  phone = '';
  when = 'BEFORE';
  role1 = 'RANGE';
  role2 = 'DESK';

  save() {
    if (!this.name) {
      alert('Name is required.');
      return;
    }
    var person = {
      'name': this.name,
      'phone': this.phone,
      'when': this.when,
      'role1': this.role1,
      'role2': this.role2,
      'selected': false
    }
    window.localStorage.setItem('name', this.name);
    window.localStorage.setItem('phone', this.phone);
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

    if (localStorage.getItem('phone')) {
      this.phone = localStorage.getItem('phone');
    }
  }
}
