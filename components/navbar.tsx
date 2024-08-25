import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-10 shadow">
      <div className="max-w-screen-lg flex items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Contact App</span>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/contacts'}>Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
