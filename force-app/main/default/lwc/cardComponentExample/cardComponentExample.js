import { LightningElement } from 'lwc';
import sf1 from '@salesforce/resourceUrl/sf1';
import sf2 from '@salesforce/resourceUrl/sf2';
import sf3 from '@salesforce/resourceUrl/sf3';
import sf4 from '@salesforce/resourceUrl/sf4';


export default class CardComponentExample extends LightningElement {

    listofrecordsimage = [//'paras', 'desktop', 'trailhead', 'design'];
        {
            id: '1',
            title: 'image 1',
            description: 'Salesforce provides many services to the customers.',
            imgUrl : sf1,  width: '50px', height: '1000px' ,
            
            

        },
         {
            id: '2',
            title: 'image 2',
            description: 'Salesforce provides many services to the customers.',
            imgUrl : sf2,  width: '60px', height: '100px',
            
            

        },

        {
            id: '3',
            title: 'image 3',
            description: 'Salesforce provides many services to the customers.',
            imgUrl : sf3,  width: '70px', height: '100px',
            
            

        },  
         {
            id: '4',
            title: 'image 4',
            description: 'Salesforce provides many services to the customers.',
            imgUrl : sf4,  width: '80px', height: '50px', 
            
            
            

        }
        
    ];

}