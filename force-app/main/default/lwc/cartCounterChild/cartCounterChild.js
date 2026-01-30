import { LightningElement, api } from 'lwc';

export default class CartCounterChild extends LightningElement {

    qty = 0; 

    @api increment(){
        this.qty +=1;
        this.qty = Math.min(10, this.qty);
    }
    @api decrement(){ 
        this.qty -=1;
        this.qty = Math.max(0, this.qty); 
    }
    @api reset(){
        this.qty = 0;
        this.qty = Math.max(0, this.qty);
    }



}