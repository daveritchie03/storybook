import { SearchComponent } from '../app/components/search.component';
import searchfield from 'raw-loader!./searchfield.markdown';

export default {
    title: 'Search Component',
    component: SearchComponent
};

export const SearchField = () => ({
    component: SearchComponent
})

SearchField.story = {
    parameters: {
        notes: { searchfield }
    }
};