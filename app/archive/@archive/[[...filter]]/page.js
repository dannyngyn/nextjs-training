import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default function ArchiveYear({params}){
  const filter = params.filter;
  const links = getAvailableNewsYears();
  // const news = getNewsForYear(newsYear);
  return <header id="archive-header">
    <nav>
      <ul>
        {links.map(link => <li key={link}><Link href={`/archive/${link}`}>{link}</Link></li>)}
      </ul>
    </nav>
  </header>
  // <NewsList news={news}/>
}