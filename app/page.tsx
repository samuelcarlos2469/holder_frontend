async function getMessage(): Promise<string> {
  try {
    const res = await fetch("http://localhost:8000/api/message", {
      cache: "no-store",
    });
    if (!res.ok) {
      return "Failed to load message from API.";
    }
    const data = (await res.json()) as { message: string };
    return data.message;
  } catch {
    return "Backend API is not available.";
  }
}

export default async function Home() {
  const message = await getMessage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-10 shadow-md">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Holder Frontend
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          A modern frontend powered by Next.js and Tailwind CSS.
        </p>
        <div className="rounded-lg bg-indigo-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Message from API
          </p>
          <p className="mt-2 text-xl font-medium text-indigo-900">{message}</p>
        </div>
      </div>
    </main>
  );
}
