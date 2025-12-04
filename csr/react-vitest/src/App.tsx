import { useState } from 'react';
import {
  KolButton,
  KolInputPassword,
  KolInputText,
  KolKolibri,
  KolNav,
} from '@public-ui/react-v19';

function App() {
  const [count, setCount] = useState(0);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const label = `Count is ${count}`;

  const inputProps = {
    _label: 'Password',
    _required: true,
    _icons: {
      left: 'codicon codicon-key',
    },
    _smartButton: {
      _label: isPasswordHidden ? 'Passwort einblenden' : 'Passwort ausblenden',
      _icons: 'codicon codicon-eye',
      _on: {
        onClick: (event: Event) => {
          setIsPasswordHidden(!isPasswordHidden);
        },
      },
    },
    _value: 'password',
  };

  return (
    <div className="font-sans m-10 text-center">
      <div className="flex align-center gap-10 justify-center">
        <a href="https://reactjs.org" target="_blank">
          <KolKolibri className="block w-20 logo" />
        </a>
      </div>
      <KolNav
        _label="Kleine Navigation"
        _links={[
          {
            _label: 'Test',
          },
          {
            _active: true,
            _href: '/',
            _label: 'Test',
            _children: [
              {
                _on: {
                  onClick: console.log,
                },
                _label: 'Test',
              },
              {
                _active: true,
                _href: '/',
                _label: 'Test',
              },
            ],
          },
        ]}
      />
      <h1>Vite + React + KoliBri</h1>
      <div className="grid gap-8 items-center justify-center">
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            {label}
          </button>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-8">
            <KolButton
              _label={label}
              _on={{
                onClick: () => setCount((count) => count + 1),
              }}
            />
            <KolButton
              _label={label}
              _hideLabel
              _variant="danger"
              _icons="codicon codicon-check"
              _on={{
                onClick: () => setCount((count) => count + 1),
              }}
            />
          </div>
        </div>
        <div className="text-left">
          {isPasswordHidden ? (
            <KolInputPassword {...inputProps} />
          ) : (
            <KolInputText {...inputProps} />
          )}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray text-sm">
        Click on the <strong>Vite</strong>, <strong>React</strong> and{' '}
        <strong>KoliBri</strong> logos to learn more
      </p>
    </div>
  );
}

export default App;
