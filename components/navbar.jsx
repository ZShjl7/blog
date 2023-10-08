"use client";
import Image from "next/image";
import Main from "../assets/main.png";
import Logo from "../assets/logo.png";
import styles from "../styles/Home.module.css";
import { React, useContext } from "react";
import { logincontext } from "@/global/logincon";
import Link from "next/link";

export default function navbar() {
  const {login, setlogin} = useContext(logincontext);
  return (
    <div className="flex justify-between mx-5 pt-5 ">
      <div className={styles.logo}>
        <Image
          src={Logo}
          alt="not found"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex uppercase  text-white ">
        <Link href="/">
          <div className="pr-10 hover:font-bold ">Home</div>
        </Link>
        <Link href="#famed">
          <div className="pr-10 hover:font-bold">Famed</div>
        </Link>
        <Link href="#about">
          <div className="pr-10 hover:font-bold">About</div>
        </Link>
        <Link href="#contact">
          <div className="pr-10 hover:font-bold">Contact</div>
        </Link>
        
          <div className="pr-10 hover:font-bold hover:cursor-pointer"  onClick={()=>{setlogin(login=>!login)}} >
          Login
          </div>        
      </div>
    </div>
  );
}