import { Formik, FormikContextType, FormikHelpers } from 'formik';
import type { ErrorListPropType, Iso8601 } from '@public-ui/components';
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
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

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

const validationSchema = z.object({
	inputText: z.string().min(3),
	inputEmail: z.string().email(),
	select: z.literal('Rio de Janeiro'),
});

function App() {
	const initialValues: FormModel = {
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
	};
	const [submittedValues, setSubmittedValues] = useState<FormModel | null>(null);

	function createErrorList(formikErrors: Record<string, string>): ErrorListPropType[] {
		return Object.keys(formikErrors).map((fieldName) => ({
			message: `${fieldName}: ${formikErrors[fieldName]}`,
			selector: `#field-${fieldName}`,
		}));
	}

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
				validationSchema={toFormikValidationSchema(validationSchema)}
				onSubmit={(values) => {
					setSubmittedValues(values);
				}}
			>
				{({ submitForm, values, handleChange, handleBlur, setValues, errors, touched, submitCount }: FormikContextType<FormModel>) => (
					<KolForm
						_errorList={submitCount ? createErrorList(errors) : undefined}
						_on={{
							onSubmit: () => {
								submitForm();
							},
						}}
					>
						<div className="grid gap-lg">
							<KolInputText
								_label="Text"
								_value={values.inputText}
								_name="inputText"
								id="field-inputText"
								_touched={touched.inputText}
								_msg={{
									_type: 'error',
									_description: errors.inputText || '',
								}}
								_on={{ onInput: handleChange, onBlur: handleBlur }}
							/>

							<KolInputCheckbox
								_label="Checkbox"
								_name="inputCheckbox"
								id="field-inputCheckbox"
								_touched={touched.inputCheckbox}
								_msg={{
									_type: 'error',
									_description: errors.inputCheckbox || '',
								}}
								_on={{
									onInput: (event, value) => {
										setValues({
											...values,
											inputCheckbox: value as true | null,
										});
									},
									onBlur: handleBlur,
								}}
							/>
							<KolInputColor
								_label="Color"
								_value={values.inputColor}
								_name="inputColor"
								id="field-inputColor"
								_touched={touched.inputColor}
								_msg={{
									_type: 'error',
									_description: errors.inputColor || '',
								}}
								_on={{ onInput: handleChange, onBlur: handleBlur }}
							/>
							<KolInputDate
								_label="Date"
								_value={values.inputDate}
								_name="inputDate"
								id="field-inputDate"
								_touched={touched.inputDate}
								_msg={{
									_type: 'error',
									_description: errors.inputDate || '',
								}}
								_on={{ onInput: handleChange, onBlur: handleBlur }}
							/>
							<KolInputEmail
								_label="Email"
								_value={values.inputEmail}
								_name="inputEmail"
								id="field-inputEmail"
								_touched={touched.inputEmail}
								_msg={{
									_type: 'error',
									_description: errors.inputEmail || '',
								}}
								_on={{ onInput: handleChange, onBlur: handleBlur }}
							/>
							<KolInputFile
								_label="File"
								_name="inputFile"
								id="field-inputFile"
								_touched={touched.inputFile}
								_msg={{
									_type: 'error',
									_description: errors.inputFile || '',
								}}
								_on={{
									onInput: (event, value) => {
										setValues({
											...values,
											inputFile: value as FileList,
										});
									},
									onBlur: handleBlur,
								}}
							/>
							<KolInputNumber
								_label="Number"
								_value={values.inputNumber}
								_name="inputNumber"
								id="field-inputNumber"
								_touched={touched.inputNumber}
								_msg={{
									_type: 'error',
									_description: errors.inputNumber || '',
								}}
								_on={{ onInput: handleChange, onBlur: handleBlur }}
							/>
							<KolInputPassword
								_label="Password"
								_value={values.inputPassword}
								_name="inputPassword"
								id="field-inputPassword"
								_touched={touched.inputPassword}
								_msg={{
									_type: 'error',
									_description: errors.inputPassword || '',
								}}
								_on={{ onInput: handleChange, onBlur: handleBlur }}
							/>
							<KolInputRange
								_label="Range"
								_value={values.inputRange}
								_name="inputRange"
								id="field-inputRange"
								_touched={touched.inputRange}
								_msg={{
									_type: 'error',
									_description: errors.inputRange || '',
								}}
								_on={{
									onInput: (event, value) => {
										setValues({
											...values,
											inputRange: value as number,
										});
									},
									onBlur: handleBlur,
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
								_touched={touched.inputRadio}
								_msg={{
									_type: 'error',
									_description: errors.inputRadio || '',
								}}
								_on={{
									onInput: (event, value) => {
										setValues({
											...values,
											inputRadio: value as string,
										});
									},
									onBlur: handleBlur,
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
								_touched={touched.select}
								_msg={{
									_type: 'error',
									_description: errors.select || '',
								}}
								_on={{
									onInput: (event, selectedValues: unknown) => {
										setValues({
											...values,
											select: (selectedValues as string[])[0],
										});
									},
									onBlur: handleBlur,
								}}
							/>
							<KolTextarea
								_label="Textarea"
								_value={values.textarea}
								_name="textarea"
								id="field-textarea"
								_touched={touched.textarea}
								_msg={{
									_type: 'error',
									_description: errors.textarea || '',
								}}
								_on={{ onInput: handleChange, onBlur: handleBlur }}
							/>
							<div className="mt">
								<KolButton _label="Button" _value={values.button} _name="button" id="field-button" _type="submit" />
								<KolButtonLink _label="ButtonLink" _value={values.buttonLink} _name="buttonLink" id="field-buttonLink" _type="submit" className="ml" />
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
