import { Navbar, Button, Link } from '@nextui-org/react'
import { useRouter } from 'next/router'

export default function Navigation() {
  const { pathname } = useRouter()

  return (
    <Navbar isBordered variant='floating'>
      <Navbar.Content hideIn='xs' variant='highlight-rounded'>
        <Navbar.Link href='/' isActive={pathname === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link
          href='/projects'
          isActive={pathname === '/projects/[slug]' || pathname === '/projects'}
        >
          Projects
        </Navbar.Link>
        <Navbar.Link href='/contact'>Contact</Navbar.Link>
        <Navbar.Link href='/CV'>CV</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color='inherit' href='#'>
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href='#'>
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
