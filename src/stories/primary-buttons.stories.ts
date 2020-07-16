import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button.component';
import primarybuttons from 'raw-loader!./primarybuttons.markdown';
import { object, select, text, boolean, withKnobs } from '@storybook/addon-knobs';

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

let x = {'buttons': buttons};

export const PrimaryButton = () => ({
    component: ButtonComponent,
    props: {
        text: text('text', 'Hello'),
        buttons: x
    },
})

PrimaryButton.story = {
    parameters: {
        notes: { primarybuttons }
    },
}
