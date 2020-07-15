import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button.component';
import primarybuttons from 'raw-loader!./primarybuttons.markdown';

export default {
    title: 'Primary Buttons',
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
        buttons: buttons
    },
})

PrimaryButton.story = {
    parameters: {
        notes: { primarybuttons }
    },
}