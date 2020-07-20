import { ButtonComponent } from '../app/components/button.component';
import tertiarybuttons from 'raw-loader!./tertiarybuttons.markdown';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Tertiary Buttons',
    decorators: [withKnobs],
    component: ButtonComponent,
};

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

export const TertiaryButton = () => ({
    component: ButtonComponent,
    props: {
        buttons: object('Buttons', buttons, 'id-tertiary'),
        onClick: action('Tertiary buttons')
    },
})

TertiaryButton.story = {
    parameters: {
        notes: { tertiarybuttons },
    },
}