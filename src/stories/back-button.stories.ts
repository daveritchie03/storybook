import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button.component';
import backbutton from 'raw-loader!./backbutton.markdown';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
    title: 'Back Buttons',
    decorators: [withKnobs],
    component: ButtonComponent,
};

let buttons = [
    {
        title: 'Back',
        class: 'border padding bg-white'
    }
];

export const BackButton = () => ({
    component: ButtonComponent,
    props: {
        buttons: object('Buttons', buttons, 'id-back')
    },
})

BackButton.story = {
    parameters: {
        notes: { backbutton },
    },
}