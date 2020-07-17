import { CareerProfileComponent } from '../app/components/careerprofile.component';
import careerprofile from 'raw-loader!./careerprofile.markdown';
import { withKnobs, object, text } from '@storybook/addon-knobs';

export default ({
    title: 'Career Profile',
    decorators: [withKnobs],
    component: CareerProfileComponent
})

let title = 'Career profile';
let stats = [
    {
        number: 9,
        title: 'Recommended'
    },
    {
        number: 0,
        title: 'Viewed'
    },
    {
        number: 0,
        title: 'Rated'
    },
    {
        number: 23,
        title: 'Shortlisted'
    },
];

export const CareerProfile = () => ({
    component: CareerProfileComponent,
    props: {
        title: text('Title', title, 'Title'),
        data: object('Data', stats, 'Data')
    }
})

CareerProfile.story = {
    parameters: {
        notes: { careerprofile }
    }
}