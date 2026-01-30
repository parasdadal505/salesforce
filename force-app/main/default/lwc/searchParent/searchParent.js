// import { LightningElement } from 'lwc';

// export default class SearchParent extends LightningElement {
//     keyword = '';

//     get resultsCmp() {
//         return this.template.querySelector('c-search-results');
//     }

//         handleKeywordChange(event) {
//             this.keyword = event.target.value;
//         }

//         handleSearch() {
//         this.resultsCmp.loadResults(this.keyword);
//         }

//         handleClear() {
//             this.keyword = '';
//             this.resultsCmp.clearResults();
//     }
// }
import { LightningElement } from 'lwc';

export default class SearchParent extends LightningElement {
    keyword = '';
    timer;

    get resultsCmp() {
        return this.template.querySelector('c-search-results');
    }

    handleTyping(event) {
        this.keyword = event.target.value;

        // ✅ debounce
        window.clearTimeout(this.timer);

        this.timer = window.setTimeout(() => {
            const k = (this.keyword || '').trim();

            // ✅ minimum 3 letters condition
            if (k.length >= 3) {
                this.resultsCmp.loadResults(k);
            } else {
                this.resultsCmp.clearResults();
            }
        }, 300); // 300ms delay (best)
    }

    handleClear() {
        this.keyword = '';
        this.resultsCmp.clearResults();
    }
}
