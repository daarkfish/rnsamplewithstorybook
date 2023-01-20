import { Button } from 'react-native';

export default {
    title: 'Button',
    component: Button,
    args: {
        title: 'Hello world',
        color: 'pink'
    },
};

export const Basic = args => <Button {...args} />;