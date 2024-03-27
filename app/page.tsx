import ClientFetch from '@/components/client-fetch';
import ServerFetch from '@/components/server-fetch';
import fs from 'fs/promises';

export default async function Home() {
 await fs.appendFile('acesso.txt', `${Date.now}`, 'utf8')
  return (
    <main>
      <h1>Home</h1>
      <ServerFetch />
      <ClientFetch />
    </main>
  );
}
