import { createRoot } from 'react-dom/client';
import { ArticlesList } from './ArticlesList';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(<ArticlesList />);
}
