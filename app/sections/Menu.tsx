"use client";

import { useState, Fragment } from "react";
import {
  HiTrendingUp,
  HiOutlinePuzzle,
  HiOutlineCalculator,
  HiOutlineDocumentSearch,
  HiOutlineLibrary,
} from "react-icons/hi";
import { PiChartLineThin } from "react-icons/pi";
import { TbReportMoney } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Logo from "../components/Logo";

const MenuItems = [
  {
    name: "SOLUTIONS",
    href: "#",
    submenu: [
      {
        title: "RESEARCH TYPE",
        subitems: [
          {
            name: "ETF Data & Analytics",
            description:
              "The data and ananlytics  you need to navigate the ETF unibverse.",
            icon: HiTrendingUp,
            href: "#",
            submenu: false,
          },
          {
            name: "ETF & Mutual Fund Research",
            description: "A forward focuded, holistic aproach to fund insight.",
            icon: HiOutlinePuzzle,
            href: "#",
            submenu: false,
          },
          {
            name: "Forensic Accounting Research",
            description:
              "Understanding implications oh public company financial reporting.",
            icon: HiOutlineCalculator,
            href: "#",
            submenu: false,
          },
          {
            name: "Fundamental Equity Research",
            description:
              "Gain a conprehensive view of global themes, industries, and companies.",
            icon: HiOutlineDocumentSearch,
            href: "#",
            submenu: false,
          },
          {
            name: "Public Policy & Legal Research",
            description:
              "Identify opportunity  and risk driven by public policy and the courts.",
            icon: HiOutlineLibrary,
            href: "#",
            submenu: false,
          },
          {
            name: "Technical Research",
            description: "Giving you confidevce to navigate any market cycle.",
            icon: PiChartLineThin,
            href: "#",
            submenu: false,
          },
        ],
      },
    ],
  },
  {
    name: "WHO WE SERVE",
    href: "#",
    submenu: [
      {
        title: "CLIENT TYPE",
        subitems: [
          {
            name: "Wealth Management",
            description:
              "Full-service Broker-Dealers, Wealth Management Firms, Private Banks, RIAs",
            icon: TbReportMoney,
            href: "#",
            submenu: false,
          },
          {
            name: "Institutional Investors",
            description:
              "Hedge Funds, Asset Managers, Family Offices, Pension Funds, Sovereign Wealth Funds, Private Equity",
            icon: FaPeopleGroup,
            href: "#",
            submenu: false,
          },
          {
            name: "Financial Advisors",
            description:
              "Financial Advisors, Relationship Managers, Wealth Managers",
            icon: FaUserTie,
            href: "#",
            submenu: false,
          },
          {
            name: "Individual Investors",
            description: "Self-directed individual investors",
            icon: FaPerson,
            href: "#",
            submenu: false,
          },
        ],
      },
    ],
  },
  { name: "BLOG", href: "#", submenu: false },
  {
    name: "INSIGHTS",
    href: "#",
    submenu: [
      {
        title: "SECTORS",
        subitems: [
          {
            name: "Consumer",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Energy",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Financials",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Healthcare",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Technology(TMT)",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Other",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
        ],
      },
      {
        title: "RESEARCH TYPE",
        subitems: [
          {
            name: "ETF & Mutual Fund",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Forensic",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Fundamental",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Policy & Legal",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Technical",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
        ],
      },
      {
        title: "CONTENT TYPE",
        subitems: [
          {
            name: "Case Study",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Press Release",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Research",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Video",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Webinar",
            description: false,
            icon: false,
            href: "#",
            submenu: false,
          },
        ],
      },
    ],
  },
  {
    name: "ABOUT",
    href: "#",
    submenu: [
      {
        title: "ABOUT US",
        subitems: [
          {
            name: "In The News",
            descriptions: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Contact Us",
            descriptions: false,
            icon: false,
            href: "#",
            submenu: false,
          },
          {
            name: "Careers",
            descriptions: false,
            icon: false,
            href: "#",
            submenu: false,
          },
        ],
      },
    ],
  },
  { name: "LOGIN", description: "", icon: false, href: "#", submenu: false },
];

const Menu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <div className="mx-auto xl:max-w-7xl lg:max-w-5xl max-w-sm">
        <nav
          aria-label="Global"
          className="mx-auto flex  items-center justify-between py-6 lg:px-8 px-4"
        >
          <div className="flex lg:flex-1">
            <Logo className="h-20 w-auto" type="primary" />
          </div>
          {/* Mobile Menu hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* Main Menu */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            {MenuItems.map((item) => (
              <Fragment key={item.name}>
                {item.submenu === false ? (
                  <Link
                    href={item.href}
                    className="text-sm/6 font-bold text-navi"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Popover className="relative">
                    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-bold text-navi">
                      {item.name}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none text-navi"
                      />
                    </PopoverButton>
                    <PopoverPanel
                      transition
                      className="absolute top-full -left-3 z-10 mt-3 w-auto   overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                      <div className="p-4 ">
                        <div className="flex flex-row gap-x-6 ">
                          {Array.isArray(item.submenu) &&
                            item.submenu.map((subitem: any) => (
                              <div
                                key={subitem.title}
                                className="grow  min-w-3xs"
                              >
                                <p className="p-4 text-navi-op font-bold text-lg">
                                  {subitem.title}
                                </p>
                                {subitem.subitems.map((subsubitem: any) => (
                                  <div
                                    key={subsubitem.name}
                                    className="group relative flex items-left gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                  >
                                    {subsubitem.icon === false ? (
                                      ""
                                    ) : (
                                      <div className="flex size-11  flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <subsubitem.icon
                                          aria-hidden="true"
                                          className="size-6 text-navi group-hover:text-navi-hover"
                                        />
                                      </div>
                                    )}
                                    <div className="flex-auto">
                                      <Link
                                        href={item.href}
                                        className="block font-bold text-navi text-lg"
                                      >
                                        {subsubitem.name}
                                        <span className="absolute inset-0" />
                                      </Link>
                                      {subsubitem.description === false ? (
                                        ""
                                      ) : (
                                        <p className="mt-1 text-navi text-sm w-80">
                                          {subsubitem.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ))}
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                )}
              </Fragment>
            ))}
          </PopoverGroup>
          {/* Mobile Menu */}
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 max-w-full ">
              <div className="flex items-center justify-between">
                <Logo className="h-20 w-auto" type="primary" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                {MenuItems.map((item) => (
                  <div key={item.name} className="flex flex-col gap-y-4">
                    {item.submenu === false ? (
                      <Link
                        href={item.href}
                        className="text-base/7 font-bold text-navi py-3"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Disclosure as="div" className="-mx-3">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-3 pr-3.5 pl-3 text-base/7 font-bold text-navi hover:bg-gray-50">
                          {item.name}
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="size-5 flex-none group-data-open:rotate-180"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {Array.isArray(item.submenu) &&
                            item.submenu.map((subitem: any) => (
                              <div
                                key={subitem.title}
                                className="grow  min-w-3xs"
                              >
                                {subitem.subitems.map((subsubitem: any) => (
                                  <div
                                    key={subsubitem.name}
                                    className="group relative flex items-left gap-x-6 rounded-lg p-4 text-sm/3 hover:bg-gray-50"
                                  >
                                    <div className="flex-auto">
                                      <Link
                                        href={item.href}
                                        className="block font-bold text-navi text-md"
                                      >
                                        {subsubitem.name}
                                        <span className="absolute inset-0" />
                                      </Link>
                                      {subsubitem.description === false ? (
                                        ""
                                      ) : (
                                        <p className="mt-1 text-navi text-sm w-80">
                                          {subsubitem.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ))}
                        </DisclosurePanel>
                      </Disclosure>
                    )}
                  </div>
                ))}
              </div>
            </DialogPanel>
          </Dialog>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="#">
              <MagnifyingGlassIcon className="size-5 text-navi" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
