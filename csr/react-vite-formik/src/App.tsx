import './App.css';
import { Formik, FormikHandlers, FormikHelpers } from 'formik';
import { KolButton, KolForm, KolHeading, KolInputText } from '@public-ui/react';
import { useState } from 'react';

type FormModel = {
	inputText: string;
};

function App() {
	const initialValues: FormModel = { inputText: '' };
	const [submittedValues, setSubmittedValues] = useState<FormModel>(null);

	return (
		<div className="App mx-auto max-w-800px p-16">
			{submittedValues && (
				<div className={'mb-8'}>
					<KolHeading _label={'Submitted Values'}></KolHeading>
					<pre>{JSON.stringify(submittedValues, null, 2)}</pre>
				</div>
			)}

			<KolHeading _label={'Form'}></KolHeading>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					setSubmittedValues(values);
				}}
			>
				{({ submitForm, values, handleSubmit, handleChange }: FormikHelpers<FormModel>) => (
					<KolForm
						_on={{
							onSubmit: () => {
								submitForm();
							},
						}}
					>
						<KolInputText _label={'Text'} _value={values.inputText} _name={'inputText'} _on={{ onInput: handleChange }} />
						<KolButton className={'mt'} _label={'Submit'} _type={'submit'}></KolButton>
					</KolForm>
				)}
			</Formik>
		</div>
	);
}

export default App;
