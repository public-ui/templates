import * as react from 'react';
import { JSX } from '@public-ui/library-components';

interface StyleReactProps {
    class?: string;
    className?: string;
    style?: {
        [key: string]: any;
    };
}

declare const DemoButton: react.ForwardRefExoticComponent<JSX.DemoButton & Omit<react.HTMLAttributes<HTMLDemoButtonElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDemoButtonElement>>;

export { DemoButton };
