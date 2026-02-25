import Link from "next/link"

export default function MiddleHeader(){
  return(
    <ul className='flex px-4 gap-2'>
      <li><Link href={'/competitions/2021/standings'}>順位表</Link></li>
      <li><Link href={'/competitions/2021/matches'}>試合</Link></li>
      <li><Link href={'/competitions/2021/scorers'}>得点</Link></li>
    </ul>
  )
}