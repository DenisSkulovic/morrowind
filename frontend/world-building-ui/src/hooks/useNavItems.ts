import { NavItem } from "../components/common/PageWrapper/Sidebar";
import { useEffect, useState } from "react";
import { getNavItems } from "../config/navigation";

export const useNavItems = (accountId?: string, worldId?: string) => {
    const [navItems, setNavItems] = useState<NavItem[]>([])
    useEffect(() => {
        setNavItems(getNavItems(accountId, worldId))
    }, [accountId, worldId])
    return navItems
}