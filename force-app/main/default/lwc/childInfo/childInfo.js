import { LightningElement, api } from 'lwc';

export default class ChildInfo extends LightningElement {
    @api name;
    @api city;
}
