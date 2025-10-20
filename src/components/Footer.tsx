export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Eduardo Solano. All rights reserved.
      </div>
    </footer>
  );
}
