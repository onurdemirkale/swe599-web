import ReactDOM from 'react-dom/client';

import 'semantic-ui-css/semantic.min.css';

import App from './components/App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement!);

root.render(<App />);
