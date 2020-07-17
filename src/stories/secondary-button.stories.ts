import { ButtonComponent } from '../app/components/button.component';
import primarybuttons from 'raw-loader!./primarybuttons.markdown';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
    title: 'Secondary Buttons',
    decorators: [withKnobs],
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
        buttons: object('Buttons', buttons, 'id-secondary')
    },
})

SecondaryButton.story = {
    parameters: {
        notes: { primarybuttons }
    },
}