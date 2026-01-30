import { LightningElement } from 'lwc';

export default class TypingText extends LightningElement {
    text = 'NSFORCE PVT LTD';
    displayText = '';
    index = 0;

    connectedCallback() {
        this.typeText();
    }

    typeText() {
        if (this.index < this.text.length) {
            this.displayText += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.typeText(), 120);
        } else {
            setTimeout(() => {
                this.displayText = '';
                this.index = 0;
                this.typeText();
            }, 1500);
        }
    }
}
