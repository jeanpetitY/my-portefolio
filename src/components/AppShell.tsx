import type { ReactNode } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

type AppShellProps = { children: ReactNode; className?: string };

const AppShell = ({ children, className = '' }: AppShellProps) => (
  <div className={'portfolio-shell ' + className}>
    <SiteNav />
    <div className="page-transition">{children}</div>
    <SiteFooter />
  </div>
);

export default AppShell;
