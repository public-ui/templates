// @ts-nocheck - KoliBri v3 components incompatible with React 19 strict types
import { useState } from 'react';
import type { ErrorListPropType, Iso8601 } from '@public-ui/components';
import { KolButton, KolButtonLink, KolForm, KolHeading } from '@public-ui/react-v19';
import {
	KolInputCheckboxController,
	KolInputColorController,
	KolInputDateController,
	KolInputEmailController,
	KolInputFileController,
	KolInputNumberController,
	KolInputPasswordController,
	KolInputRadioController,
	KolInputRangeController,
	KolInputTextController,
	KolSingleSelectController,
	KolTextareaController,
} from '@public-ui/react-hook-form-adapter';
import { useForm, type FieldErrors } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type FormModel = {
	inputText: string;
	inputCheckbox: boolean;
	inputColor: string;
	inputDate: Iso8601 | null;
	inputEmail: string;
	inputFile?: FileList;
	inputNumber?: number;
	inputPassword: string;
	inputRange: number;
	inputRadio: string;
	select: string;
	textarea: string;
	button: string;
	buttonLink: string;
};

const validationSchema = z.object({
	inputText: z.string().min(3, 'Please enter at least 3 characters'),
	inputEmail: z.string().email('Please enter a valid email'),
	select: z.string().refine((val) => val === 'Rio de Janeiro', {
		message: 'Please select Rio de Janeiro',
	}),
});

const defaultValues: FormModel = {
	inputText: '',
	inputCheckbox: false,
	inputColor: '#000000',
	inputDate: null,
	inputEmail: '',
	inputFile: undefined,
	inputNumber: undefined,
	inputPassword: '',
	inputRange: 50,
	inputRadio: '',
	select: 'Rosenheim',
	textarea: '',
	button: 'button value',
	buttonLink: 'buttonLink value',
};

function createErrorList(errors: FieldErrors<FormModel>): ErrorListPropType[] {
	return Object.entries(errors)
		.map(([fieldName, fieldError]) => {
			if (!fieldError || typeof fieldError.message !== 'string') {
				return null;
			}
			return {
				message: `${fieldName}: ${fieldError.message}`,
				selector: `#field-${fieldName}`,
			} as ErrorListPropType;
		})
		.filter((error): error is ErrorListPropType => Boolean(error));
}

function App() {
	const [submittedValues, setSubmittedValues] = useState<FormModel | null>(null);
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors, submitCount },
	} = useForm<FormModel>({
		defaultValues,
		// @ts-expect-error - zod resolver type mismatch with partial validation schema
		resolver: zodResolver(validationSchema),
	});

	const values = watch();

	return (
		<div className="App mx-auto max-w-800px p-16">
			{submittedValues && (
				<div className="mb-8">
					<KolHeading _label="Submitted Values"></KolHeading>
					<pre>{JSON.stringify(submittedValues, null, 2)}</pre>
				</div>
			)}

			<KolHeading _label="Form"></KolHeading>

			<KolForm
				_errorList={submitCount ? createErrorList(errors) : undefined}
				_on={{
					onSubmit: (event) => {
						void handleSubmit((data) => setSubmittedValues(data as unknown as FormModel))(event as unknown as React.BaseSyntheticEvent);
					},
				}}
			>
				<div className="grid gap-lg">
					<KolInputTextController name="inputText" control={control} id="field-inputText" _label="Text" />

					<KolInputCheckboxController name="inputCheckbox" control={control} id="field-inputCheckbox" _label="Checkbox" />

					<KolInputColorController name="inputColor" control={control} id="field-inputColor" _label="Color" />

					<KolInputDateController name="inputDate" control={control} id="field-inputDate" _label="Date" />

					<KolInputEmailController name="inputEmail" control={control} id="field-inputEmail" _label="Email" />

					<KolInputFileController name="inputFile" control={control} id="field-inputFile" _label="File" _multiple />

					<KolInputNumberController name="inputNumber" control={control} id="field-inputNumber" _label="Number" />

					<KolInputPasswordController name="inputPassword" control={control} id="field-inputPassword" _label="Password" />

					<KolInputRangeController name="inputRange" control={control} id="field-inputRange" _label="Range" />

					<KolInputRadioController
						name="inputRadio"
						control={control}
						id="field-inputRadio"
						_label="Radio"
						_orientation="horizontal"
						_options={[
							{ label: 'New York', value: 'New York' },
							{ label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
							{ label: 'Rosenheim', value: 'Rosenheim' },
						]}
					/>

					<KolSingleSelectController
						name="select"
						control={control}
						id="field-select"
						_label="Select"
						_options={[
							{ label: 'New York', value: 'New York' },
							{ label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
							{ label: 'Rosenheim', value: 'Rosenheim' },
						]}
					/>

					<KolTextareaController name="textarea" control={control} id="field-textarea" _label="Textarea" />

					<div className="mt">
						<KolButton _label="Button" _value={values.button} _name="button" id="field-button" _type="submit" />
						<KolButtonLink _label="ButtonLink" _value={values.buttonLink} _name="buttonLink" id="field-buttonLink" _type="submit" className="ml" />
					</div>

					<KolButton className="mt w-fit" _label="Submit" _type="submit"></KolButton>
				</div>
			</KolForm>
		</div>
	);
}

export default App;
