import Sidebar from "@/components/Sidebar"
import Link from "next/link"
import {FaBarsStaggered} from "react-icons/fa6"

const DashboardLayout = ({children}) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden fixed top-6 right-6"
        >
          <FaBarsStaggered className="w-8 h-8 text-primary"/>
        </label>
        <div className="bg-base-200 px-8 py-12 min-h-screen">
          {/* page content */}
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar/>
        {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-case-content">
          <li>
            <Link href="/chat">Chat</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/tours">Tours</Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
export default DashboardLayout