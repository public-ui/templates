import { Generic, Theme } from 'adopted-style-sheets';

type RequiredButtonProps = NonNullable<unknown>;
type OptionalButtonProps = NonNullable<unknown>;
type RequiredButtonStates = RequiredButtonProps;
type OptionalButtonStates = OptionalButtonProps;
type ButtonProps = Generic.Element.Members<RequiredButtonProps, OptionalButtonProps>;
type ButtonStates = Generic.Element.Members<RequiredButtonStates, OptionalButtonStates>;
type ButtonAPI = Generic.Element.ComponentApi<RequiredButtonProps, OptionalButtonProps, RequiredButtonStates, OptionalButtonStates>;

declare const Demo: Theme<"demo", never, "button">;

export { ButtonAPI, ButtonProps, ButtonStates, Demo, OptionalButtonProps, OptionalButtonStates, RequiredButtonProps, RequiredButtonStates };
