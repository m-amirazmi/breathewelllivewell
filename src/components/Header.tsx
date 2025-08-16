import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="py-2 bg-[#E9DFD6] text-black ">
      <div className="container mx-auto flex gap-2 justify-between">
        <div>
          <img src="/assets/images/logo.png" className="h-16 w-16 inline-block" alt="Logo" />
        </div>
        <nav className="flex gap-8 items-center">
          <Link to="/">{t('header.main_issue')}</Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <span>
                {t('header.our_programs.title')}
              </span>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem> {t('header.our_programs.forum_breathe_well_live_well')}</DropdownMenuItem>
              <DropdownMenuItem> {t('header.our_programs.health_exhibitions')}</DropdownMenuItem>
              <DropdownMenuItem> {t('header.our_programs.basic_life_support')}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/">{t('header.announcements')}</Link>
        </nav>
      </div>
      {/* <Button onClick={() => i18n.changeLanguage('ms')}>Switch to MY</Button>
      <Button onClick={() => i18n.changeLanguage('en')}>Switch to EN</Button> */}
    </header>
  );
}
