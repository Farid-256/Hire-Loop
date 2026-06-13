

import { Bars, Bell,  House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function DashBoardSideBar() {
    const navItems = [
        { icon: House, href: '/dashBoard/recruiter', label: "Home" },
        { icon: Magnifier, href: '/dashBoard/recruiter/jobs', label: 'Jobs' },
        { icon: Bell, href: '/dashBoard/recruiter/jobs/new', label: "Creat Job" },
        { icon: Person, href: '/dashBoard/recruiter/company', label: "Company" },
     ];

    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link href={item.href} key={item.label} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default" type="button">
                <item.icon className="size-5 text-muted" />
                {item.label}

            </Link>
        ))}
    </nav>

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">{navContent}</aside>
            <Drawer>
                <Button className='lg:hidden' variant="secondary">
                    <Bars />
                    Menu
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    )
}