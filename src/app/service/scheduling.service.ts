import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SchedulingService {
  roster = []
  volunteers = [];
  path = "";

  constructor(private db: AngularFireDatabase) {}

  getRoster() {
    return new Promise(function(resolve, reject) {
      this.db.list('/roster')
        .subscribe(snapshots => {
          this.roster = [];
          snapshots.forEach(snapshot => {
            this.roster.push(snapshot);
          });
          resolve(this.roster);
        });
    }.bind(this));
  }

  saveRoster(roster) {
    var updates = {};
    updates['/roster'] = roster;

    return new Promise(function(resolve, reject) {
      this.db.object('/')
        .update(updates);
        resolve("success");
    }.bind(this));
  }

  getMonthData(dataKey, dayKey) {
    return new Promise(function(resolve, reject) {
      this.db.object('/months')
        .subscribe(snapshots => {
          if (snapshots[dataKey] && snapshots[dataKey][dayKey]) {
            this.volunteers = snapshots[dataKey][dayKey];
            resolve(snapshots[dataKey][dayKey].sort(function(a, b) { return a.name > b.name; }));
          } else {
            this.volunteers = [];
            resolve([]);
          }
        });
    }.bind(this));
  }

  saveVolunteer(dataKey: string, day: number, person) {
    var newList = [];
    var updates = {};

    for (var count=0; count<this.volunteers.length; count++) {
      if (this.volunteers[count].name != person.name) {
        newList.push(this.volunteers[count]);
      }
    }

    newList.push(person);

    updates[dataKey + '/' + day] = newList;

    return new Promise(function(resolve, reject) {
      this.db.object('/months')
        .update(updates);
        resolve("success");
    }.bind(this));
  }

  deleteVolunteer(dataKey: string, day: number, person) {
    var newList = [];
    var updates = {};

    for (var count=0; count<this.volunteers.length; count++) {
      if (this.volunteers[count].name != person.name) {
        newList.push(this.volunteers[count]);
      }
    }

    updates[dataKey + '/' + day] = newList;

    return new Promise(function(resolve, reject) {
      this.db.object('/months')
        .update(updates);
        resolve("success");
    }.bind(this));
  }

  getLocked() {
    return new Promise(function(resolve, reject) {
      this.db.object('/locked/status')
        .subscribe(snapshots => {
          resolve(snapshots.$value);
        });
    }.bind(this));
  }

  saveLocked(locked) {
    var updates = {};
    updates['/status'] = locked;

    return new Promise(function(resolve, reject) {
      this.db.object('/locked').update(updates);
      resolve("success");
    }.bind(this));
  }

  getPassword() {
    return new Promise(function(resolve, reject) {
      this.db.object('/locked/password')
        .subscribe(snapshots => {
          resolve(snapshots.$value);
        });
    }.bind(this));
  }

  savePassword(password) {
    var updates = {};
    updates['/password'] = password;

    return new Promise(function(resolve, reject) {
      this.db.object('/locked').update(updates);
      resolve("success");
    }.bind(this));
  }
}
