'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItem = [
    {label: 'Home', href:'/'},
    {label: 'companions', href:'/companions'},
    {label: 'My Journey', href:'/my-journey'},
    {label: 'Subscription', href:'/subscription'}

    ]
const navitem = () => {
    const pathname = usePathname();
  return (
    <nav className='flex items-center gap-4'>
            {navItem.map(({label, href}) => (
                <Link  href ={href} key={label} className={cn(pathname=== href && 'text-primary font-semi-bold')}>
                    {label}
                </Link>
            ))}
    </nav>
  )
}

export default navitem