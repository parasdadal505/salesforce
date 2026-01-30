import { LightningElement } from 'lwc';

export default class AccountContactFilterParent extends LightningElement {
    selectedStatus = 'All';

    statusOptions = [
        { label: 'All', value: 'All' },
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' }
    ];

    get childCmp() {
        return this.template.querySelector('c-contact-list-child');
    }

    handleStatusChange(event) {
        this.selectedStatus = event.detail.value;
    }

    applyFilter() {
        this.childCmp.applyFilter(this.selectedStatus);
    }

    handleRefresh() {
        this.childCmp.refresh();
    }

    handleClear() {
        this.selectedStatus = 'All';
        this.childCmp.clear();
    }
}