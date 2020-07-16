import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button.component';
import nextbutton from 'raw-loader!./nextbutton.markdown';

export default {
    title: 'Next Buttons',
    component: ButtonComponent
};

let label = 'buttons';
let buttons = [
    {
        title: 'Next',
        class: 'bg-green padding text-white'
    }
];
let x = {'buttons': buttons};

export const NextButton = () => ({
    component: ButtonComponent,
    props: {
        buttons: x
    },
})

NextButton.story = {
    parameters: {
        notes: { nextbutton }
    },
}