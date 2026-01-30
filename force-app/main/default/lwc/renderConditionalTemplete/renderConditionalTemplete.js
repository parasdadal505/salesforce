import { LightningElement } from 'lwc';

export default class RenderConditionalTemplete extends LightningElement {

    isVisible = true;
    lable = "Hide Content";


        handleClick(){

            if(this.isVisible == true){

                this.isVisible = false;
                this.lable="Show Content";
               
        }
        else{
            this.isVisible = true;
            this.lable="Hide Content";
                            

        }


}
}