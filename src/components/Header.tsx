import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  const { t } = useTranslation();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  return (
    <header className="bg-[#E9DFD6] text-black ">
      <div className="px-4 py-2">
        <div className="relative container mx-auto flex gap-2 justify-between items-center">
          <div>
            <img
              src="/assets/images/logo.png"
              className="h-16 w-16 inline-block"
              alt="Logo"
            />
          </div>
          <nav className=" gap-8 items-center hidden md:flex">
            <Link to="/isu-utama">{t("header.main_issue")}</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <span>{t("header.our_programs.title")}</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/program-kami/forum-breathe-well-live-well">
                    {t("header.our_programs.forum_breathe_well_live_well")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/program-kami/pameran-kesihatan">
                    {t("header.our_programs.health_exhibitions")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/program-kami/bls">
                    {t("header.our_programs.basic_life_support")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/hebahan">{t("header.announcements")}</Link>
          </nav>

          <Button
            variant="outline"
            className="md:hidden text-[#623726]"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {openMobileMenu && (
        <div className="absolute md:hidden bg-neutral-700 text-white w-full h-fit">
          <div className="flex flex-col items-center gap-4 py-4 group:border-b">
            <Link to="/isu-utama">{t("header.main_issue")}</Link>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="flex items-center gap-1"
              onClick={() => setOpenMobileDropdown(!openMobileDropdown)}
            >
              <span>{t("header.our_programs.title")}</span>
              {!openMobileDropdown && <ChevronDown size={16} />}
              {openMobileDropdown && <ChevronUp size={16} />}
            </button>
            {openMobileDropdown && (
              <>
                <div>
                  <Link to="/program-kami/forum-breathe-well-live-well">
                    {t("header.our_programs.forum_breathe_well_live_well")}
                  </Link>
                </div>
                <div>
                  <Link to="/program-kami/pameran-kesihatan">
                    {t("header.our_programs.health_exhibitions")}
                  </Link>
                </div>
                <div>
                  <Link to="/program-kami/bls">
                    {t("header.our_programs.basic_life_support")}
                  </Link>
                </div>
              </>
            )}
            <Link to="/hebahan">{t("header.announcements")}</Link>
          </div>
        </div>
      )}
      {/* <Button onClick={() => i18n.changeLanguage('ms')}>Switch to MY</Button>
      <Button onClick={() => i18n.changeLanguage('en')}>Switch to EN</Button> */}
    </header>
  );
}
