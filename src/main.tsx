import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { resolveRouteBundle } from './routeLoader.ts';

async function bootstrap() {
  const initialRoute = await resolveRouteBundle(window.location.pathname);
  createRoot(document.getElementById('root')!).render(
    <App initialRoute={initialRoute} />
  );
}

void bootstrap();
