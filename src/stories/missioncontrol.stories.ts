import { MissionControlComponent } from '../app/components/missioncontrol.component';
import missioncontrol from 'raw-loader!./missioncontrol.markdown';

export default ({
    title: 'Mission Control',
    component: MissionControlComponent
})

let buttons_list = [
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
        buttons: buttons_list
    }
})

MissionControl.story = {
    parameters: {
        notes: { missioncontrol }
    }
}