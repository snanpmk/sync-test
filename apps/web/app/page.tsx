import { SynConnectLogo } from '@synconnect/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <SynConnectLogo className="w-64 h-auto mb-8 text-white" />
      <h1 className="text-2xl font-bold">Design not confirmed</h1>
      <p className="mt-4 text-gray-400">Placeholder content</p>
    </main>
  );
}
