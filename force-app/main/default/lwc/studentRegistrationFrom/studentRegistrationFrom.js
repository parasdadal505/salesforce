import { LightningElement, track } from 'lwc';

export default class StudentRegistrationFrom extends LightningElement {
    //primitive properties
    firstName = '';
    lastName = '';
    email = '';

    studentData = {};

    @track reactiveStudentData = {};


    handleFirstNameChange(event) {
        console.log('First Name Changed: ');
        // this.firstName = event.target.value;
        // this.studentData.firstName = event.target.value;
        this.reactiveStudentData.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        console.log('Last Name Changed: ');
        // this.lastName = event.target.value;
        // this.studentData.lastName = event.target.value;
        this.reactiveStudentData.lastName = event.target.value;
 
    }

    handleEmailChange(event) {
        console.log('Email Changed: ');
        // this.email = event.target.value;
        // this.studentData.email = this.event.target.value;
        this.reactiveStudentData.email = event.target.value;



    }

}