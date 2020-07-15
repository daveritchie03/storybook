import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button.component';
import primarybuttons from 'raw-loader!./primarybuttons.markdown';

export default {
    title: 'Secondary Buttons',
    component: ButtonComponent
};

let buttons = [
    {
        title: 'Watch Now',
        class: 'border bg-white padding',
        img: true,
        img_url: '/assets/circledplay.png'
    }
];

export const SecondaryButton = () => ({
    component: ButtonComponent,
    props: {
        buttons: buttons
    },
})

SecondaryButton.story = {
    parameters: {
        notes: { primarybuttons }
    },
}