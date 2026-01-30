import { LightningElement , api} from 'lwc';

export default class ContactListChild extends LightningElement {

    contacts = [];
    filteredContacts  = [];

    currentFilterLabel  = 'All Contacts';

    connectedCallback(){
        this.loadDummyContacts();
        this.applyFilterLogic ('All Contacts');

    }

    loadDummyContacts(){
        this.contacts = [
            { Id: '1', Name: 'John Doe', Title: 'Manager' , Email: 'john@email.com',Status: 'Active'},
            { Id: '2', Name: 'Jane Smith', Title: 'Developer' , Email: 'jane@gmail.com', Status: 'Active'},
            { Id: '3', Name: 'Mike Johnson', Title: 'Designer' , Email: 'mike@email.com', Status: 'InActive'},
            { Id: '4', Name: 'Emily Davis', Title: 'Analyst' , Email: 'emily@gamil.com', Status: 'InActive'}
        ];
}

    @api applyFilter(Status){
        this.currentFilterLabel = Status;
    }

    @api refresh(){
       this.loadDummyContacts();
       this.filteredContacts = [...this.contacts];
    }

     applyFilterLogic(status) {
        this.currentFilterLabel = status;

        if (status === 'All') {
            this.filteredContacts = [...this.contacts];
        } else {
            this.filteredContacts = this.contacts.filter(c => c.Status === status);
        }
    }


}