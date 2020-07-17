import { SearchComponent } from '../app/components/search.component';
import searchfield from 'raw-loader!./searchfield.markdown';
import { withKnobs, object, text } from '@storybook/addon-knobs';

export default {
    title: 'Search Component',
    decorators: [withKnobs],
    component: SearchComponent
};

export const SearchField = () => ({
    component: SearchComponent,
    props: {
        search_text: text('Search', 'Hey', 'Search Field')
    }
})

SearchField.story = {
    parameters: {
        notes: { searchfield }
    }
};