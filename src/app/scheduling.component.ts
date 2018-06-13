import { Component, OnInit } from '@angular/core';
import { SchedulingService } from './service/scheduling.service';

@Component({
  selector: 'scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
  providers: [SchedulingService]
})
export class Scheduling implements OnInit{
  title = 'Archery Range Schedule';

  year = new Date().getFullYear();
  month = new Date().getMonth();
  day = new Date().getDate();

  roster = [];
  volunteers = [];

  showEdit = false;
  showAuth = false;
  locked = false;

  constructor(private schedulingService: SchedulingService) {}

  //---------------------------------------//
  //          Date/Time Functions          //
  //---------------------------------------//

  /*
   * Updates the current day and retrieves
   * the list of volunteers for the
   * given date.
   *
   * @param day - day to set
   * @return none
   */
  onDayChanged(day: number) {
    this.day = day;
    this.getMonthData();
  }

  /*
   * Updates the current month and retrieves
   * the list of volunteers for the
   * given date.
   *
   * @param month - month to set
   * @return none
   */
  onMonthChanged(month: number) {
    this.month = month;
    this.getMonthData();
  }

  /*
   * Updates the current year and retrieves
   * the list of volunteers for the
   * given date.
   *
   * @param year - year to set
   * @return none
   */
  onYearChanged(year: number) {
    this.year = year;
    this.getMonthData();
  }


  //---------------------------------------//
  //            Roster Functions           //
  //---------------------------------------//

  /*
   * Retrieves the list of current members
   * and stores the list in a local variable.
   *
   * @return none
   */
//  getRoster() {
//    this.schedulingService.getRoster().then(function(roster) {
//      this.roster = roster;
//    }.bind(this));
//  }

  /*
   * Saves the list of current members
   * to the database when it is changed.
   *
   * @param roster - the JSON object containing memeber data
   * @return none
   */
  onRosterChanged(roster: string) {
    this.schedulingService.saveRoster(JSON.parse(roster)).then(function() {
//      this.getRoster();
    }.bind(this));
  }

  /*
   * Hides the edit modal window.
   *
   * @return none
   */
  onHideRoster() {
    this.showEdit = false;
  }

  /*
   * Shows the edit modal window.
   *
   * @return none
   */
  onEdit() {
    this.showEdit = true;
  }

  /*
   * Retrieves the list of volunteers
   * for a given date and stores the list in a
   * local variable.
   *
   * @return none
   */
  getMonthData() {
    var dataKey = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
    this.schedulingService.getMonthData(dataKey, this.day).then(function(volunteers) {
      this.volunteers = volunteers;
    }.bind(this));
  }

  /*
   * Saves the availability for a given member to the database.
   *
   * @param id - the ID of the member to update
   * @param availabile - boolean indicating the availability of the given member
   * @return none
   */
  saveVolunteer(person) {
    let dataKey: string = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
    this.schedulingService.saveVolunteer(dataKey, this.day, person).then(function() {
      this.getMonthData();
    }.bind(this));
  }

  /*
   * Toggles whether a person is working.
   *
   * @param person - the JSON object representing the member
   * @return none
   */
  onWorkingChanged(person: string) {
    if (!this.locked) {
      var personData = JSON.parse(person);
      personData.selected = !personData.selected;
      this.saveVolunteer(personData);
    } else {
      alert("Scheduling is currently locked.");
    }
  }

  /*
   * Deletes a person from the current day.
   *
   * @param person - the JSON object representing the member
   * @return none
   */
  onDelete(person: string) {
    var personData = JSON.parse(person);
    if (!personData.selected) {
      let dataKey: string = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
      this.schedulingService.deleteVolunteer(dataKey, this.day, personData).then(function() {
        this.getMonthData();
      }.bind(this));
    } else {
      alert("This person is currently scheduled to work and cannot be deleted.");
    }
  }


  //---------------------------------------//
  //       Authentication Functions        //
  //---------------------------------------//

  /*
   * Shows the authentication modal.
   *
   * @return none
   */
  openAuth() {
   this.showAuth = true;
  }

  /*
   * Hides the authentication modal.
   *
   * @return none
   */
  onHideAuth() {
    this.showAuth = false;
  }

  /*
   * Toggles the current locked state and
   * saves the state to the database.
   *
   * @return none
   */
  onToggleLock() {
    this.schedulingService.saveLocked(!this.locked).then(function() {
      this.getLocked();
    }.bind(this));
  }

  /*
   * Retrieves the current locked state and stores
   * the value in a local variable.
   *
   * @return none
   */
  getLocked() {
    this.schedulingService.getLocked().then(function(locked) {
      this.locked = locked;
    }.bind(this));
  }

  /*
   * Saves an updated password to the database.
   *
   * @param password - the new password
   * @return none
   */
  onPasswordChanged(password) {
    this.schedulingService.savePassword(password).then(function() {
      console.log("password successfully changed");
    }.bind(this));
  }

  /*
   * Function called on module initialization.
   *
   * @return none
   */
  ngOnInit(): void {
    this.getMonthData();
    this.getLocked();
  }

  ngOnChanges(): void {

  }
}

