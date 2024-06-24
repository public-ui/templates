import { Formik, FormikHelpers } from 'formik';
import {
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
} from '@public-ui/react';
import { useState } from 'react';

type FormModel = {
	inputText: string;
	inputCheckbox: true | null;
	inputColor: string;
	inputDate: string;
	inputEmail: string;
	inputFile: FileList | null;
	inputNumber: string;
	inputPassword: string;
	inputRange: number | null;
	inputRadio: string;
	select: string[];
	textarea: string;
	button: string;
	buttonLink: string;
};

function App() {
	const initialValues: FormModel = {
		inputText: '',
		inputCheckbox: null,
		inputColor: '',
		inputDate: '',
		inputEmail: '',
		inputFile: null,
		inputNumber: '',
		inputPassword: '',
		inputRange: null,
		inputRadio: '',
		select: ['Rosenheim'],
		textarea: '',
		button: 'button value',
		buttonLink: 'buttonLink value',
	};
	const [submittedValues, setSubmittedValues] = useState<FormModel>(null);

	return (
		<div className="App mx-auto max-w-800px p-16">
			{submittedValues && (
				<div className="mb-8">
					<KolHeading _label="Submitted Values"></KolHeading>
					<pre>{JSON.stringify(submittedValues, null, 2)}</pre>
				</div>
			)}

			<KolHeading _label="Form"></KolHeading>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					setSubmittedValues(values);
				}}
			>
				{({ submitForm, values, handleSubmit, handleChange, setValues }: FormikHelpers<FormModel>) => (
					<KolForm
						_on={{
							onSubmit: () => {
								submitForm();
							},
						}}
					>
						<div className="grid gap-lg">
							<KolInputText _label="Text" _value={values.inputText} _name="inputText" _on={{ onInput: handleChange }} />
							<KolInputCheckbox
								_label="Checkbox"
								_name="inputCheckbox"
								_on={{
									onInput: (event, value) => {
										setValues({
											...values,
											inputCheckbox: value,
										});
									},
								}}
							/>
							<KolInputColor _label="Color" _value={values.inputColor} _name="inputColor" _on={{ onInput: handleChange }} />
							<KolInputDate _label="Date" _value={values.inputDate} _name="inputDate" _on={{ onInput: handleChange }} />
							<KolInputEmail _label="Email" _value={values.inputEmail} _name="inputEmail" _on={{ onInput: handleChange }} />
							<KolInputFile
								_label="File"
								_value={values.inputFile}
								_name="inputFile"
								_on={{
									onInput: (event, value) => {
										setValues({
											...values,
											inputFile: value,
										});
									},
								}}
							/>
							<KolInputNumber _label="Number" _value={values.inputNumber} _name="inputNumber" _on={{ onInput: handleChange }} />
							<KolInputPassword _label="Password" _value={values.inputPassword} _name="inputPassword" _on={{ onInput: handleChange }} />
							<KolInputRange
								_label="Range"
								_value={values.inputRange}
								_name="inputRange"
								_on={{
									onInput: (event, value) => {
										setValues({
											...values,
											inputRange: value,
										});
									},
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
								_on={{
									onInput: (event, value) => {
										setValues({
											...values,
											inputRadio: value,
										});
									},
								}}
							/>
							<KolSelect
								_label="Select"
								_orientation="horizontal"
								_options={[
									{ label: 'New York', value: 'New York' },
									{ label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
									{ label: 'Rosenheim', value: 'Rosenheim' },
								]}
								_value={values.select}
								_name="select"
								_on={{
									onInput: (event, value) => {
										setValues({
											...values,
											select: value,
										});
									},
								}}
							/>
							<KolTextarea _label="Textarea" _value={values.textarea} _name="textarea" _on={{ onInput: handleChange }} />
							<div className="mt">
								<KolButton _label="Button" _value={values.button} _name="button" _type="submit" />
								<KolButtonLink _label="ButtonLink" _value={values.buttonLink} _name="buttonLink" _type="submit" className="ml" />
							</div>

							<KolButton className="mt w-fit" _label="Submit" _type="submit"></KolButton>
						</div>
					</KolForm>
				)}
			</Formik>
		</div>
	);
}

export default App;
