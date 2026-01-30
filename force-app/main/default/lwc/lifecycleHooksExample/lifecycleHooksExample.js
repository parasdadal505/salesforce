import { LightningElement } from 'lwc';

export default class LifecycleHooksExample extends LightningElement {

    constructor(){
        super();
        console.log('constructor called');
        console.log('1');
    }

    connectedCallback(){
        console.log('call resived from connected callback');
        console.log('2');
        }

    renderedCallback(){
        console.log('call resived from rendered callback');
                console.log('3');

    }

    disconnectedCallback(){
        console.log('call resived from disconnected callback');
        console.log('4');
    }



}