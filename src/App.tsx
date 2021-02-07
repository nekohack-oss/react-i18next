import React from 'react'
import logo from './assets/logo.svg'
import { useTranslation } from 'react-i18next'

const App = () => {
    const { t } = useTranslation()
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('Learn React')}
                </a>
            </header>
        </div>
    )
}

export default App
