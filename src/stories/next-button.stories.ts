import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button.component';
import nextbutton from 'raw-loader!./nextbutton.markdown';

export default {
    title: 'Next Buttons',
    component: ButtonComponent
};

let buttons = [
    {
        title: 'Next',
        class: 'bg-green padding text-white'
    }
];

export const NextButton = () => ({
    component: ButtonComponent,
    props: {
        buttons: buttons
    },
})

NextButton.story = {
    parameters: {
        notes: { nextbutton }
    },
}