import { SearchComponent } from '../app/components/search.component';
import searchfield from 'raw-loader!./searchfield.markdown';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
    title: 'Search Component',
    decorators: [withKnobs],
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