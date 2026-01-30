import { LightningElement, api } from 'lwc';

export default class SearchResults extends LightningElement {
    results = [];

        cities = ['Wankaner', 'Rajkot', 'Ahmedabad', 'Morbi'];


    @api loadResults(keyword) {


        const k = (keyword || '').trim().toLowerCase();



                if (!k) {
                     this.results = [];
                        return;
                }


            this.results = this.cities.filter(city =>
            city.toLowerCase().includes(k)
        );

        // this.results = [
        //     `${k} - Account`,
        //     `${k} - Contact`,
        //     `${k} - Opportunity`,
        //     `${k} - Case`
        // ];
    }

    @api clearResults() {
        this.results = [];
    }
}
