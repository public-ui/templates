import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { z } from 'zod';
import type { ErrorListPropType, Iso8601 } from '@public-ui/components';
import {
	KolKolibri,
	KolLink,
	KolAlert,
	KolIcon,
	KolButton,
	KolButtonLink,
	KolForm,
	KolHeading,
	KolInputCheckbox,
	KolInputColor,
	KolInputDate,
	KolInputEmail,
	KolInputFile,
	KolInputNumber,
	KolInputPassword,
	KolInputRadio,
	KolInputRange,
	KolInputText,
	KolSelect,
	KolTextarea,
} from '@public-ui/react-v19';
import reactLogo from './assets/logo.react.png';

const validationSchema = z.object({
	inputText: z.string().min(3),
	inputEmail: z.string().email(),
	select: z.literal('Rio de Janeiro'),
});

type FormModel = {
	inputText: string;
	inputCheckbox: true | null;
	inputColor: string;
	inputDate: Iso8601 | null;
	inputEmail: string;
	inputFile: FileList | null;
	inputNumber: number | null;
	inputPassword: string;
	inputRange: number | undefined;
	inputRadio: string;
	select: string;
	textarea: string;
	button: string;
	buttonLink: string;
};

function App() {
	const [submittedValues, setSubmittedValues] = useState<FormModel | null>(null);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, touchedFields, submitCount },
	} = useForm<FormModel>({
		resolver: zodResolver(validationSchema) as never,
		defaultValues: {
			inputText: '',
			inputCheckbox: null,
			inputColor: '',
			inputDate: null,
			inputEmail: '',
			inputFile: null,
			inputNumber: null,
			inputPassword: '',
			inputRange: undefined,
			inputRadio: '',
			select: 'Rosenheim',
			textarea: '',
			button: 'button value',
			buttonLink: 'buttonLink value',
		},
	});

	const values = watch();

	function createErrorList(): ErrorListPropType[] {
		return Object.keys(errors).map((fieldName) => ({
			message: `${fieldName}: ${errors[fieldName as keyof FormModel]?.message ?? ''}`,
			selector: `#field-${fieldName}`,
		}));
	}

	const fieldMsg = (name: keyof FormModel) => ({
		_type: 'error' as const,
		_description: errors[name]?.message ?? '',
	});

	const isTouched = (name: keyof FormModel) => !!touchedFields[name];

	return (
		<div className="itzbund container mx-auto my-10 max-w-800px">
			{/* Einheitliches Header-Layout */}
			<header className="text-center">
				<div className="grid grid-cols-2 items-center">
					<div className="block m-auto w-40">
						<KolKolibri _labeled={false} />
					</div>
					<div>
						<img className="block m-auto h-25" src={reactLogo} alt="Logo vom React Framework" />
					</div>
				</div>
				<strong className="text-2xl">Willkommen zu KoliBri</strong>
			</header>

			{/* Einheitliche Cards */}
			<main className="grid md:grid-cols-2 gap-6 p-12">
				<KolAlert _type="success" _label="Manifest" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/en/docs/manifest" _label="Manifest öffnen" _target="_blank">
						<span slot="expert">
							<KolIcon _label="Scroll-Icon" _icons="fa-solid fa-scroll" /> Manifest öffnen
						</span>
					</KolLink>
				</KolAlert>
				<KolAlert _type="info" _label="Konzepte" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/en/docs/concepts/architecture" _label="Konzepte öffnen" _target="_blank">
						<span slot="expert">
							<KolIcon _label="Architektur-Icon" _icons="fa-solid fa-sitemap" /> Konzepte öffnen
						</span>
					</KolLink>
				</KolAlert>
				<KolAlert _type="warning" _label="Komponenten" _variant="card" _level={2}>
					<KolLink _href="https://public-ui.github.io/en/docs/components" _label="Komponenten öffnen" _target="_blank">
						<span slot="expert">
							<KolIcon _label="Bausteine-Icon" _icons="fa-solid fa-cubes" /> Komponenten öffnen
						</span>
					</KolLink>
				</KolAlert>
				<KolAlert _type="error" _label="MCP" _variant="card" _level={2}>
					<KolLink _href="https://www.npmjs.com/package/@public-ui/mcp" _label="MCP öffnen" _target="_blank">
						<span slot="expert">
							<KolIcon _label="Roboter-Icon" _icons="fa-solid fa-robot" /> MCP öffnen
						</span>
					</KolLink>
				</KolAlert>
			</main>

			{/* React Hook Form Demo */}
			<section className="mx-auto max-w-800px px-8 pb-16">
				{submittedValues && (
					<div className="mb-8">
						<KolHeading _label="Submitted Values" />
						<pre>{JSON.stringify(submittedValues, null, 2)}</pre>
					</div>
				)}

				<KolHeading _label="React Hook Form" />

				<KolForm
					_errorList={submitCount ? createErrorList() : undefined}
					_on={{
						onSubmit: () => {
							void handleSubmit((data) => setSubmittedValues(data as FormModel))();
						},
					}}
				>
					<div className="grid gap-lg">
						<KolInputText
							_label="Text"
							_value={values.inputText}
							_name="inputText"
							id="field-inputText"
							_touched={isTouched('inputText')}
							_msg={fieldMsg('inputText')}
							_on={{ onInput: (e, v) => setValue('inputText', v as string), onBlur: () => {} }}
						/>

						<KolInputCheckbox
							_label="Checkbox"
							_name="inputCheckbox"
							id="field-inputCheckbox"
							_touched={isTouched('inputCheckbox')}
							_msg={fieldMsg('inputCheckbox')}
							_on={{
								onInput: (e, v) => setValue('inputCheckbox', v as true | null),
								onBlur: () => {},
							}}
						/>
						<KolInputColor
							_label="Color"
							_value={values.inputColor}
							_name="inputColor"
							id="field-inputColor"
							_touched={isTouched('inputColor')}
							_msg={fieldMsg('inputColor')}
							_on={{ onInput: (e, v) => setValue('inputColor', v as string), onBlur: () => {} }}
						/>
						<KolInputDate
							_label="Date"
							_value={values.inputDate}
							_name="inputDate"
							id="field-inputDate"
							_touched={isTouched('inputDate')}
							_msg={fieldMsg('inputDate')}
							_on={{ onInput: (e, v) => setValue('inputDate', v as Iso8601), onBlur: () => {} }}
						/>
						<KolInputEmail
							_label="Email"
							_value={values.inputEmail}
							_name="inputEmail"
							id="field-inputEmail"
							_touched={isTouched('inputEmail')}
							_msg={fieldMsg('inputEmail')}
							_on={{ onInput: (e, v) => setValue('inputEmail', v as string), onBlur: () => {} }}
						/>
						<KolInputFile
							_label="File"
							_name="inputFile"
							id="field-inputFile"
							_touched={isTouched('inputFile')}
							_msg={fieldMsg('inputFile')}
							_on={{
								onInput: (e, v) => setValue('inputFile', v as FileList),
								onBlur: () => {},
							}}
						/>
						<KolInputNumber
							_label="Number"
							_value={values.inputNumber}
							_name="inputNumber"
							id="field-inputNumber"
							_touched={isTouched('inputNumber')}
							_msg={fieldMsg('inputNumber')}
							_on={{ onInput: (e, v) => setValue('inputNumber', v as number), onBlur: () => {} }}
						/>
						<KolInputPassword
							_label="Password"
							_value={values.inputPassword}
							_name="inputPassword"
							id="field-inputPassword"
							_touched={isTouched('inputPassword')}
							_msg={fieldMsg('inputPassword')}
							_on={{ onInput: (e, v) => setValue('inputPassword', v as string), onBlur: () => {} }}
						/>
						<KolInputRange
							_label="Range"
							_value={values.inputRange}
							_name="inputRange"
							id="field-inputRange"
							_touched={isTouched('inputRange')}
							_msg={fieldMsg('inputRange')}
							_on={{
								onInput: (e, v) => setValue('inputRange', v as number),
								onBlur: () => {},
							}}
						/>
						<KolInputRadio
							_label="Radio"
							_orientation="horizontal"
							_options={[
								{ label: 'New York', value: 'New York' },
								{ label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
								{ label: 'Rosenheim', value: 'Rosenheim' },
							]}
							_value={values.inputRadio}
							_name="inputRadio"
							id="field-inputRadio"
							_touched={isTouched('inputRadio')}
							_msg={fieldMsg('inputRadio')}
							_on={{
								onInput: (e, v) => setValue('inputRadio', v as string),
								onBlur: () => {},
							}}
						/>
						<KolSelect
							_label="Select"
							_options={[
								{ label: 'New York', value: 'New York' },
								{ label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
								{ label: 'Rosenheim', value: 'Rosenheim' },
							]}
							_value={values.select}
							_name="select"
							id="field-select"
							_touched={isTouched('select')}
							_msg={fieldMsg('select')}
							_on={{
								onInput: (e, selectedValues: unknown) => {
									setValue('select', (selectedValues as string[])[0]);
								},
								onBlur: () => {},
							}}
						/>
						<KolTextarea
							_label="Textarea"
							_value={values.textarea}
							_name="textarea"
							id="field-textarea"
							_touched={isTouched('textarea')}
							_msg={fieldMsg('textarea')}
							_on={{ onInput: (e, v) => setValue('textarea', v as string), onBlur: () => {} }}
						/>
						<div className="mt">
							<KolButton _label="Button" _value={values.button} _name="button" id="field-button" _type="submit" />
							<KolButtonLink _label="ButtonLink" _value={values.buttonLink} _name="buttonLink" id="field-buttonLink" _type="submit" className="ml" />
						</div>

						<KolButton className="mt w-fit" _label="Submit" _type="submit" />
					</div>
				</KolForm>
			</section>
		</div>
	);
}

export default App;
