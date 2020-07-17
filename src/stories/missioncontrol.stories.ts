import { MissionControlComponent } from '../app/components/missioncontrol.component';
import missioncontrol from 'raw-loader!./missioncontrol.markdown';
import { withKnobs, object } from '@storybook/addon-knobs';

export default ({
    title: 'Mission Control',
    decorators: [withKnobs],
    component: MissionControlComponent
})

let buttons = [
    {
        title: 'Mission Control',
        state: true
    },
    {
        title: 'Mission Control',
        state: false
    },
];

export const MissionControl = () => ({
    component: MissionControlComponent,
    props: {
        buttons: object('Buttons', buttons, 'Mission Control')
    }
})

MissionControl.story = {
    parameters: {
        notes: { missioncontrol }
    }
}