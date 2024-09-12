'use client';

import Link from "next/link";
import Image from 'next/image';
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css';
import navigation from '@/components/nav/navigation';
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import Navigation from "@/components/nav/navigation";


export default function MainHeader(){
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground/>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navigation href="/meals">Browse Meals</Navigation>
            </li>
            <li>
              <Navigation href="/community">Foodies</Navigation>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}