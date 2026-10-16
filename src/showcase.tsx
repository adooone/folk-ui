import ReactDOM from 'react-dom/client';
import { Shell } from './showcase/shell/shell';
import './globals.scss';

export default Shell;

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<Shell />);
}
