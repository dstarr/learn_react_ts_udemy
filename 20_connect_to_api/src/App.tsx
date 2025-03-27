import useUsers from "./hooks/useUsers";

const App = () => {

  const { users, error, isLoading } = useUsers();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold py-6">Connecting to API</h1>

        {isLoading && <p className="text-blue-500">Loading...</p>}

        {error && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.first_name} {user.middle_name} {user.last_name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
