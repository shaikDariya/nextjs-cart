export default function ({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex justify-center items-center rounded shadow-md px-10 m-4">
      {children}
    </div>
  );
}
