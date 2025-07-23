import Nav from '../componets/Nav';

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-2">This is the main content area.</p>
      </main>
    </div>
  );
}