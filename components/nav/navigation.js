'use client';
import classes from './navigation.module.css';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({href,children}){
  const path = usePathname();
  return <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>{children}</Link>
}