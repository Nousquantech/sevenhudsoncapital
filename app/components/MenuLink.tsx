import React from "react";
import Link from "next/link";

type MenuLinkProps = {
  name: string;
  href?: string;
};

const MenuLink = ({ name, href }: MenuLinkProps) => {
  return (
    <Link href={href || "#"}>
      <span className="text-navi font-bold">{name}</span>
    </Link>
  );
};

export default MenuLink;
