import Nav from '../componets/Nav';
export default function About() {
  return (
    <div>
      <Nav />
      <main className="p-4">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="mt-2">This page contains information about our organization.</p>
      </main>
    </div>
  );
}