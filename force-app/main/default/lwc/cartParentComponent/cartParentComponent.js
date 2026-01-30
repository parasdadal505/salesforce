import { LightningElement } from 'lwc';

export default class CartParentComponent extends LightningElement {



    handleIncrease(){
        this.template.querySelector('c-cart-counter-child').increment();

    }
    handleDecrease(){
        this.template.querySelector('c-cart-counter-child').decrement();
    }
    handleReset(){
        this.template.querySelector('c-cart-counter-child').reset();
    }

    
    


}