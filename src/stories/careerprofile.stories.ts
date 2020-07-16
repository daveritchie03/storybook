import { CareerProfileComponent } from '../app/components/careerprofile.component';
import careerprofile from 'raw-loader!./careerprofile.markdown';
import { withKnobs, object } from '@storybook/addon-knobs';

export default ({
    title: 'Career Profile',
    decorators: [withKnobs],
    component: CareerProfileComponent
})

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
        data: stats
    }
})

CareerProfile.story = {
    parameters: {
        notes: { careerprofile }
    }
}