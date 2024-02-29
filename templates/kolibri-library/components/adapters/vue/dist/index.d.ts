import { JSX } from '@public-ui/library-components';

interface InputProps<T> {
    modelValue?: T;
}

declare const DemoButton: (props: JSX.DemoButton & InputProps<string | number | boolean> & {}) => any;

export { DemoButton };
