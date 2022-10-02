import { useEffect, useState } from 'react';

interface props {
  changeTheme: React.SetStateAction<string>;
}
const options = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];

export default function NavBar({ changeTheme }: props): JSX.Element {
  const [range, setRange] = useState(0);

  useEffect(() => {
    changeTheme(options[range]);
  }, [range]);

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <label
          htmlFor='my-drawer'
          className='btn btn-ghost btn-circle drawer-button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </label>
        <a className='btn btn-ghost normal-case text-xl'>mdNinja</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
          />
        </div>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='https://placeimg.com/80/80/people' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
            <li>
              <input
                type='range'
                min={0}
                max={100}
                step={1}
                value={range}
                className='range'
                onChange={(e) => setRange(parseInt(e.target.value))}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
