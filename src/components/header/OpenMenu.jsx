export default function OpenMenu() {
  return (
    <button
      type="button"
      className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
    >
      <span className="absolute -inset-0.5"></span>
      <span className="sr-only">Open menu</span>
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
