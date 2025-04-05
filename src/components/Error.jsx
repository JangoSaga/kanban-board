function Error({ error }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-red-100 text-red-700">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="mt-2">{error}</p>
    </div>
  );
}

export default Error;
