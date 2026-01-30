import { LightningElement , wire} from 'lwc';
import sf1 from '@salesforce/resourceUrl/sf1';
import sf2 from '@salesforce/resourceUrl/sf2';
import sf3 from '@salesforce/resourceUrl/sf3';
import sf4 from '@salesforce/resourceUrl/sf4';

import getHighRevenueAccountRecords from '@salesforce/apex/AccountController.getHighRevenueAccountRecords';

export default class HighRevenueAccount extends LightningElement {

    accountToDisplay = [];
    images = [sf1, sf2, sf3, sf4];



@wire(getHighRevenueAccountRecords)
getAccountHandler(response){

    //{error:..., data:...}

    //Case 1 : {error:undifind, data:...}

    //Case 2 : {error:..., data:undifind}

    const {data, error} = response; //destructuring assignment what is this? give me definition and with somple why example real life -> 
    //  const obj = {a:10, b:20}; const {a, b} = obj; // a=10, b=20 
    //Destructuring assignment is a JavaScript feature that allows you to extract values from arrays or properties from objects into distinct variables. 
    


    if(error){
        console.error(error);
        console.log('Error while fetching the data');
        return;
    }
    if(data){
         this.accountToDisplay = data.map((acc, index) => {
                return {
                    ...acc,
                    imageUrl: this.images[index % this.images.length] // loop images
                };
            });
    }
}



}