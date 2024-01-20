'use client';

import {
    UserGroupIcon,
    UsersIcon,
    UserCircleIcon,
    UserIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
  
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { name: 'Inicio', href: '/sistema', icon: HomeIcon, submenu: [] },
    { name: 'Usuarios', href: '/sistema/usuarios', icon: UserGroupIcon, submenu: [
      {name:'Investigador', href: '/sistema/usuarios/investigadores', icon: UserCircleIcon},
      {name:'Estudiante', href: '/sistema/usuarios/estudiantes', icon: UsersIcon},
      {name:'Estancia', href: '/sistema/usuarios/estancias', icon: UserIcon}
    ] },
    { name: 'Proyectos', href: '/sistema/proyectos', icon: DocumentDuplicateIcon, submenu: []},
  ];
  import Link from 'next/link';
  import {usePathname} from 'next/navigation';
  import clsx from 'clsx';

  export default function NavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <>
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-300 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {'bg-sky-100 text-blue-600': pathname === link.href,},
              )}
              >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
            {(link.submenu.length > 0)?<>{link.submenu?.map((sublink) =>{
              const LinkIcon = sublink.icon;
              return(
              <>
                <Link
                  key={sublink.name}
                  href={sublink.href}
                  className={clsx(
                    "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-300 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                    {'bg-sky-100 text-blue-600': pathname === sublink.href,},
                  )}
                >
                  <LinkIcon className="w-6 ml-4" />
                  <p className="hidden md:block">{sublink.name}</p>
                </Link>
              </>
              );
            })}</>:<></>}
            </>
          );
        })}
      </>
    );
  }