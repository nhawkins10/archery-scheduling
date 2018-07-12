import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SchedulingService {
  volunteers = [];
  monthOverview = [];
  path = "";

  constructor(private db: AngularFireDatabase) {}

  getMonthOverview(dataKey) {
    return new Promise(function(resolve, reject) {
      this.db.object('/months')
        .subscribe(snapshots => {
          console.log(snapshots);
          this.monthOverview = [];
          for (var index=0; index<31; index++) {
            if (!snapshots[dataKey] || !snapshots[dataKey][index+1]) {
              this.monthOverview.push(false);
            } else {
              //object to represent all available positions
              var filled = {
                RANGE: {
                  BEFORE: false,
                  AFTER: false
                },
                DESK: {
                  BEFORE: false,
                  AFTER: false
                }
              };

              //loop through volunteers and mark off each position that is filled
              snapshots[dataKey][index+1].forEach(function(entry) {
                if (entry.when == 'BOTH') {
                  filled[entry.role1].BEFORE = true;
                  filled[entry.role2].AFTER = true;
                } else {
                  filled[entry.role1][entry.when] = true;
                }
              });

              //check if all positions are filled
              if (filled.RANGE.BEFORE
                  && filled.RANGE.AFTER
                  && filled.DESK.BEFORE
                  && filled.DESK.AFTER) {
                this.monthOverview.push(true);
              } else {
                this.monthOverview.push(false);
              }
            }
          }
          resolve(this.monthOverview);
        });
    }.bind(this));
  }

  getDayData(dataKey, dayKey) {
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
