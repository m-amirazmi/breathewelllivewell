import { Link } from '@tanstack/react-router'
import content from '@/content.json'

export default function Header() {
  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <Link to="/" className="w-16 md:w-20">
            <img src="/images/logo.webp" alt="logo" />
          </Link>
          <a
            target="_blank"
            className="btn btn-neutral md:hidden ml-auto btn-sm"
            href="https://forms.gle/GCh7CD5j8cgNxscu9"
          >
            {content['header.borang_soal_selidik_pra_program']}
          </a>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/isu-utama">{content['header.isu_utama']}</Link>
              </li>
              <li>
                <a>{content['header.program_kami']}</a>
                <ul className="p-2">
                  <li>
                    <Link to="/program-kami/forum-breathe-well-live-well">
                      {
                        content[
                          'header.program_kami.forum_breathe_well_live_well'
                        ]
                      }
                    </Link>
                  </li>
                  <li>
                    <Link to="/program-kami/pameran-kesihatan">
                      {content['header.program_kami.pameran_kesihatan']}
                    </Link>
                  </li>
                  <li>
                    <Link to="/program-kami/sesi-bantuan-hidup-asas">
                      {content['header.program_kami.sesi_bantuan_hidup_asas']}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-1">
            <li className="text-lg">
              <Link to="/isu-utama">{content['header.isu_utama']}</Link>
            </li>
            <li>
              <details className="text-lg">
                <summary>{content['header.program_kami']}</summary>
                <ul className="p-2 w-48">
                  <li>
                    <Link to="/program-kami/forum-breathe-well-live-well">
                      {
                        content[
                          'header.program_kami.forum_breathe_well_live_well'
                        ]
                      }
                    </Link>
                  </li>
                  <li>
                    <Link to="/program-kami/pameran-kesihatan">
                      {content['header.program_kami.pameran_kesihatan']}
                    </Link>
                  </li>
                  <li>
                    <Link to="/program-kami/sesi-bantuan-hidup-asas">
                      {content['header.program_kami.sesi_bantuan_hidup_asas']}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                target="_blank"
                className="btn btn-neutral btn-lg"
                href="https://forms.gle/GCh7CD5j8cgNxscu9"
              >
                {content['header.borang_soal_selidik_pra_program']}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
