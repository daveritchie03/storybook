import { ButtonComponent } from '../app/components/button.component';
import primarybuttons from 'raw-loader!./primarybuttons.markdown';
import { object, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Primary Buttons',
    decorators: [withKnobs],
    component: ButtonComponent
};

let buttons = [
    {
        title: 'Watch Now',
        class: 'primary text-white padding',
        img: true,
        img_url: '/assets/circledplay.png'
    },
    {
        title: 'Generate Report',
        class: 'primary text-white padding',
        img: false,
        img_url: ''
    },
]

export const PrimaryButton = () => ({
    component: ButtonComponent,
    props: {
        buttons: object('Buttons', buttons, 'id-primary'),
        onClick: action('Primary Button')
    },
})

PrimaryButton.story = {
    parameters: {
        notes: { primarybuttons }
    },
}
