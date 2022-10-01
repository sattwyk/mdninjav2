interface props {
  theme: string;
  changeTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavBar(): JSX.Element {
  //   const options = [
  //     'light',
  //     'dark',
  //     'cupcake',
  //     'bumblebee',
  //     'emerald',
  //     'corporate',
  //     'synthwave',
  //     'retro',
  //     'cyberpunk',
  //     'valentine',
  //     'halloween',
  //     'garden',
  //     'forest',
  //     'aqua',
  //     'lofi',
  //     'pastel',
  //     'fantasy',
  //     'wireframe',
  //     'black',
  //     'luxury',
  //     'dracula',
  //     'cmyk',
  //     'autumn',
  //     'business',
  //     'acid',
  //     'lemonade',
  //     'night',
  //     'coffee',
  //     'winter',
  //   ].map((option) => {
  //     return (
  //       <option key={option} className={option === theme ? 'selected' : ''}>
  //         {option}
  //       </option>
  //     );
  //   });

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
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
              <select
                // onChange={(e) => changeTheme(e.target.value)}
                // value={theme}
                className='select select-accent w-full max-w-xs'
              >
                <option disabled>Theme</option>
                {/* {options} */}
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
