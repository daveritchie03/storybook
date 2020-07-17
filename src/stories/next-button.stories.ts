import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button.component';
import nextbutton from 'raw-loader!./nextbutton.markdown';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
    title: 'Next Buttons',
    decorators: [withKnobs],
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
        buttons: object('Buttons', buttons, 'id-next')
    },
})

NextButton.story = {
    parameters: {
        notes: { nextbutton }
    },
}