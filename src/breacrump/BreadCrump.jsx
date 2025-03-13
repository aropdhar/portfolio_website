import React from 'react'
import { useLocation ,Link } from 'react-router-dom'

const BreadCrump = () => {
    const { pathname } = useLocation(); 
    let pathnameArr = pathname.split("/").filter((path)=> path);
    let breadcrumpath = "";
  return (
    <>
       <div className="pt-10 pb-[20px]">
                <div className="flex items-center gap-x-2">
                <span className="inline-block  px-2 py-1 rounded-sm text-white_FFFFFF font-popins">
                    <Link to={"/"}>Home</Link>
                </span>
                <span>{`${">"}`}</span>
                {pathnameArr?.map((name, index) => {
                    breadcrumpath += `/${name}`;
                    const isLast = index === pathnameArr?.length - 1;
                    return isLast ? (
                    <div>
                        <span
                        className=" text-white_FFFFFF font-popins px-2 py-1 mx-2 rounded-sm"
                        key={index}
                        >
                        {name}
                        </span>
                    </div>
                    ) : (
                    <div className="flex items-center">
                        <span className="text-[20px] leading-[28px]">/</span>
                        <span key={index}>
                        <Link
                            className="bg-blue-500 px-2 py-1 mx-2 rounded-sm text-white_FFFFFF font-popins"
                            to={breadcrumpath}
                        >
                            {name}{" "}
                        </Link>
                        </span>
                    </div>
                    );
                })}
                </div>

            </div>

    </>
  )
}

export default BreadCrump
