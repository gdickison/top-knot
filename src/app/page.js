import CustomerIntakeForm from "@/components/CustomerIntakeForm"
import Link from "next/link"

const pages = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Design System',
    href: '/design-system'
  },
  {
    name: 'Jobs Table',
    href: '/jobs-table'
  },
  {
    name: 'Job Dashboard',
    href: '/job-dashboard'
  }
]

export default function Home() {
  return (
    <>
      {pages && pages.map(page => {
        return (
          <div key={page.name} className="max-w-[96rem] mx-auto">
            <Link href={page.href}>{page.name}</Link>
          </div>
        )
      })}
      <CustomerIntakeForm/>
    </>
  )
}
