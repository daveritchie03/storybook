import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button.component';
import tertiarybuttons from 'raw-loader!./tertiarybuttons.markdown';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
    title: 'Tertiary Buttons',
    decorators: [withKnobs],
    component: ButtonComponent,
};

let label = 'buttons';
let buttons = [
    {
        title: 'Watch Now',
        class: 'bg-pink padding-x text-white',
        img: true,
        img_url: '/assets/circledplay.png'
    },
    {
        title: 'Explore Content',
        class: 'bg-light-pink padding-x text-pink',
        img: true,
        img_url: '/assets/search.png'
    },
];
let x = {'buttons': buttons}

export const TertiaryButton = () => ({
    component: ButtonComponent,
    props: {
        buttons: x
    },
})

TertiaryButton.story = {
    parameters: {
        notes: { tertiarybuttons },
    },
}