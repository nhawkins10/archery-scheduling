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

  volunteers = [];
  monthOverview = [];

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
    this.getDayData();
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
    this.getDayData();
    this.getMonthOverview();
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
    this.getDayData();
  }


  //---------------------------------------//
  //            Roster Functions           //
  //---------------------------------------//

  /*
   * Adds a new volunteer to the list for the current day
   *
   * @param person - the new person object
   * @return none
   */
  onAddVolunteer(person: string) {
   let dataKey: string = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
   var personData = JSON.parse(person);
   this.schedulingService.saveVolunteer(dataKey, this.day, personData).then(function() {
     this.getDayData();
     this.getMonthOverview();
   }.bind(this));
  }

  /*
   * Hides the edit modal window.
   *
   * @return none
   */
  onHideEdit() {
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
   * Determine if days have all slots filled.
   *
   * @return none
   */
  getMonthOverview() {
    var dataKey = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
    this.schedulingService.getMonthOverview(dataKey).then(function(monthOverview) {
      this.monthOverview = monthOverview;
    }.bind(this));
  }

  /*
   * Retrieves the list of volunteers
   * for a given date and stores the list in a
   * local variable.
   *
   * @return none
   */
  getDayData() {
    var dataKey = this.year + "-" + (this.month < 10 ? "0" + this.month : this.month);
    this.schedulingService.getDayData(dataKey, this.day).then(function(volunteers) {
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
      this.getDayData();
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
        this.getDayData();
        this.getMonthOverview();
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
    this.getDayData();
    this.getMonthOverview();
    this.getLocked();
  }

  ngOnChanges(): void {

  }
}

