import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button.component';
import backbutton from 'raw-loader!./backbutton.markdown';

export default {
    title: 'Back Buttons',
    component: ButtonComponent
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
        buttons: buttons
    },
})

BackButton.story = {
    parameters: {
        notes: { backbutton }
    },
}