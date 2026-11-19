import { useEffect, useState } from 'react';

export default function App() {
  const [health, setHealth] = useState<string>('...');

  useEffect(() => {
    fetch('/api/health')
      .then((response) => response.text())
      .then(setHealth)
      .catch(() => setHealth('API unreachable'));
  }, []);

  return (
    <main>
      <h1>MASAR</h1>
      <p>Fleet management</p>
      <pre>{health}</pre>
    </main>
  );
}
