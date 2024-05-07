export default function ({
  children,
  users,
  revenu,
  notifications,
  login,
}: {
  children: React.ReactElement;
  users: React.ReactElement;
  revenu: React.ReactElement;
  notifications: React.ReactElement;
  login: React.ReactElement;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div className="flex h-full">
        <div className="flex flex-col">
          <div className="flex flex-1">{users}</div>
          <div className="flex flex-1">{revenu}</div>
        </div>
        <div className="flex">{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
}
