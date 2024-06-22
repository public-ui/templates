import * as vue from 'vue';
import { JSX } from '@public-ui/library-components';

interface InputProps<T> {
    modelValue?: T;
}

declare const DemoButton: vue.DefineSetupFnComponent<JSX.DemoButton & InputProps<string | number | boolean>, {}, {}, JSX.DemoButton & InputProps<string | number | boolean> & {}, vue.PublicProps>;

export { DemoButton };
