import { LightningElement } from 'lwc';

export default class ParentToChildDemo1 extends LightningElement {
    userName = 'Paras';
    userCity = 'Rajkot';

    
    changeData() {
        this.userName = 'Paras Dadal';
        this.userCity = 'Ahmedabad';
    }
}
