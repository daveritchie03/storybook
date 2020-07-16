import { HollandCodeComponent } from '../app/components/hollandcode.component';
import hollandcode from 'raw-loader!./hollandcode.markdown';
import { withKnobs, object } from '@storybook/addon-knobs';

export default ({
    title: 'Holland Code',
    decorators: [withKnobs],
    component: HollandCodeComponent
})

let info = 'The Holland code assessment groups people on the basis of their suitability for six different categories of occupation. Learn what your code says about you!'
let footer_info = 'Complete missions to gain access to this assessment';

export const HollandCode = () => ({
    component: HollandCodeComponent,
    props: {
        data: info,
        footer: footer_info
    }
})

HollandCode.story = {
    parameters: {
        notes: { hollandcode }
    }
}