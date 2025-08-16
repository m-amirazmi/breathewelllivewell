import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="p-4 bg-blue-400 text-black ">
			<div className="container mx-auto flex gap-2 justify-between">
				<div>Logo</div>
				<nav className="flex gap-4">
					<Link to="/">Isu Utama?</Link>

					<DropdownMenu>
						<DropdownMenuTrigger>Open</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Billing</DropdownMenuItem>
							<DropdownMenuItem>Team</DropdownMenuItem>
							<DropdownMenuItem>Subscription</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<Link to="/">Program Kami?</Link>
					<Link to="/">Hebahan</Link>
				</nav>
			</div>
		</header>
	);
}
