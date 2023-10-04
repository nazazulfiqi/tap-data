import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiBuilding3Line } from "react-icons/ri";
import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { AiOutlineAppstore, AiOutlineLogout } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import { MdMenu } from 'react-icons/md';
import { IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';
import { SubMenu } from '../sidebar/submenu';
import { signOut } from 'next-auth/react';
import { Button } from '../button/button';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

export const SidebarComponent: FC = (): ReactElement => {
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();
  
    // console.log(pathname);
  
    useEffect(() => {
      if (isTabletMid) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }, [isTabletMid]);
  
    useEffect(() => {
      isTabletMid && setOpen(false);
    }, [pathname]);
  
    const Nav_animation = isTabletMid
      ? {
          open: {
            x: 0,
            width: "16rem",
            transition: {
              damping: 40,
            },
          },
          closed: {
            x: -250,
            width: 0,
            transition: {
              damping: 40,
              delay: 0.15,
            },
          },
        }
      : {
          open: {
            width: "16rem",
            transition: {
              damping: 40,
            },
          },
          closed: {
            width: "4rem",
            transition: {
              damping: 40,
            },
          },
        };
  
    const subMenusList = [
      {
        name: "data",
        icon: RiBuilding3Line,
        menus: ["dashboard-1", "dashboard-2", "dashboard-3"],
      },
    ];


    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
          }).then((result) => {
            if (result.isConfirmed) {
              toast.success("Logout Success!", {
                autoClose: 2000,
              });
              signOut()
            }
          })
    }
  
    return (
      <div>
        <div
          onClick={() => setOpen(false)}
          className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
            open ? "block" : "hidden"
          } `}
        ></div>
        <motion.div
          ref={sidebarRef}
          variants={Nav_animation}
          initial={{ x: isTabletMid ? -250 : 0 }}
          animate={open ? "open" : "closed"}
          className=" bg-[#F1EFE4] text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
              overflow-hidden md:relative fixed
           min-h-screen h-full "
        >
          <div className="flex items-center justify-center font-medium border-b py-3 border-slate-300 bg-[F1EFE4#]">
            <Image
              src="/images/dashboard/logo-tap.png"
              width={150}
              height={45}
              alt="TAP-Logo"
            />
          </div>
  
          <div className="flex flex-col h-full">
            <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
              <li className="mb-4">
                <Link
                  href={"/dashboard"}
                  className={`${
                    pathname == "/dashboard" ? "link active" : "link"
                  } `}
                >
                  <AiOutlineAppstore size={23} className="min-w-max" />
                  Dashboard
                </Link>
              </li>
              {(open || isTabletMid) && (
                <div className="border-y py-5 border-slate-300 ">
                  <small className="pl-3 text-slate-500 inline-block mb-2">
                    Tables
                  </small>
                  {subMenusList?.map((menu) => (
                    <div key={menu.name} className="flex flex-col gap-1">
                      <SubMenu data={menu} />
                    </div>
                  ))}
                </div>
              )}
              <li>
                <Link href={"/settings"} className="link">
                  <SlSettings size={23} className="min-w-max" />
                  Settings
                </Link>
              </li>
              <li>
                <Button type="button" onClick={handleLogout} className="link">
                  <AiOutlineLogout size={23} className="min-w-max" />
                  Logout
                </Button>
              </li>
            </ul>

          </div>
          <motion.div
            onClick={() => {
              setOpen(!open);
            }}
            animate={
              open
                ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }
                : {
                    x: -10,
                    y: -200,
                    rotate: 180,
                  }
            }
            transition={{ duration: 0 }}
            className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
          >
            <IoIosArrowBack size={25} />
          </motion.div>
        </motion.div>
        <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
          <MdMenu size={25} />
        </div>
        <ToastContainer />
      </div>
    );

}
