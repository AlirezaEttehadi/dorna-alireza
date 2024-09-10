"use client";

import { AlexBrushFont } from "@dorna-alireza/fonts/alex-brush";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const websiteMusic = new Audio("/sounds/music.mp3");
    const handleInteraction = () => {
      if (websiteMusic) {
        websiteMusic.loop = true;
        websiteMusic.play();
      }
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("touchmove", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("touchmove", handleInteraction);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      <div className="w-[390px] px-4 flex flex-col items-center justify-center">
        <Image
          src="/images/top-left.png"
          alt="top left image"
          width={117}
          height={80}
          className="w-[117px] h-[80px] left-3 top-3 absolute sm:fixed"
        />
        <Image
          src="/images/top-right.png"
          alt="top right image"
          width={117}
          height={80}
          className="w-[117px] h-[80px] right-3 top-3 absolute sm:fixed"
        />
        <Image
          src="/images/bottom-left.png"
          alt="bottom left image"
          width={117}
          height={80}
          className="w-[117px] h-[80px] left-3 bottom-3 absolute sm:fixed"
        />
        <Image
          src="/images/bottom-right.png"
          alt="bottom right image"
          width={117}
          height={80}
          className="w-[117px] h-[80px] right-3 bottom-3 absolute sm:fixed"
        />
        <div className="pt-16">
          <Image
            src="/images/hero.png"
            alt="hero image"
            width={382}
            height={450}
            className="w-[382px] h-[450px]"
            priority
            quality={100}
          />
        </div>
        <div className="flex justify-between w-full gap-4 leading-none mt-6">
          <div
            className={`${AlexBrushFont.className} flex flex-col items-center`}
          >
            <div className="text-[54px] text-[#404040]">Alireza</div>
            <div className="text-[32px] text-[#494949CC]">Ettehadi</div>
          </div>
          <div
            className={`${AlexBrushFont.className} flex flex-col items-center`}
          >
            <div className="text-[54px] text-[#404040]">Dorna</div>
            <div className="text-[32px] text-[#494949CC]">Rafati</div>
          </div>
        </div>
        <Image
          src="/images/bottom.png"
          alt="bottom image"
          width={342}
          height={32}
          className="w-[342px] h-[32px] my-28"
        />
        <p className="text-2xl text-center mb-10 text-[#404040]">
          حضور شما در این بزم نشانه پاک‌ترین محبت‌هاست
        </p>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <div className="flex flex-col h-full items-center gap-2">
              <div className="font-bold text-xl text-[#404040]">موعد دیدار</div>
              <div className="border-l border-[#3333334D] h-[182px]" />
            </div>
            <div className="flex flex-col h-full items-center gap-2">
              <div className="font-bold text-xl text-[#404040]">
                شنبه۷ مهرماه ۱۴۰۳
              </div>
              <div className="border-l border-[#3333334D] h-[182px]" />
            </div>
            <div className="flex flex-col h-full items-center gap-2">
              <div className="font-bold text-xl text-[#404040]">
                از ساعت ۱۹:۳۰ الی ۲۴
              </div>
              <div className="border-l border-[#3333334D] h-[182px]" />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <Image
              src="/images/day.png"
              alt="day image"
              width={173}
              height={238}
              className="w-[173px] h-[238px]"
              quality={100}
            />
            <Image
              src="/images/month.png"
              alt="month image"
              width={173}
              height={238}
              className="w-[173px] h-[238px]"
              quality={100}
            />
            <Image
              src="/images/year.png"
              alt="year image"
              width={195}
              height={238}
              className="w-[195px] h-[238px]"
              quality={100}
            />
          </div>
        </div>
        <p className="text-center my-6 font-semibold text-xl text-[#404040]">
          جاده مخصوص کرج - بعد از میدان اتمسفر - اولین دور برگردان به سمت تهران
          - خیابان طالقانی - کوچه سفید - باغ تالار سفید
        </p>
        <div className="grid grid-cols-2 gap-4 w-full">
          <Link
            href="https://www.google.com/maps/place/Sefid+Garden+Hall/@35.7688964,51.0301933,17z/data=!4m15!1m8!3m7!1s0x3f8debf530f37cd7:0x4b3687cde11586b9!2sSefid+Garden+Hall!8m2!3d35.7688921!4d51.0327736!10e4!16s%2Fg%2F11rfb4njlg!3m5!1s0x3f8debf530f37cd7:0x4b3687cde11586b9!8m2!3d35.7688921!4d51.0327736!16s%2Fg%2F11rfb4njlg?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="font-bold text-center text-[#4D4A23] bg-[#807B3B0F] border border-[#807B3B] p-3 rounded-3xl"
          >
            گوگل‌مپ
          </Link>
          <Link
            href="https://www.waze.com/live-map/directions?from=place.ChIJ13zzMPXrjT8RuYYV4c2HNks"
            target="_blank"
            className="font-bold text-center text-[#4D4A23] bg-[#807B3B0F] border border-[#807B3B] p-3 rounded-3xl"
          >
            waze
          </Link>
          <Link
            href="https://balad.ir/p/%D8%A8%D8%A7%D8%BA-%D8%AA%D8%A7%D9%84%D8%A7%D8%B1-%D8%B3%D9%81%DB%8C%D8%AF-%DA%A9%D8%B1%D8%AC-PLvIgDKreTKB3H#15/35.76957/51.03737"
            target="_blank"
            className="font-bold text-center text-[#4D4A23] bg-[#807B3B0F] border border-[#807B3B] p-3 rounded-3xl"
          >
            بلد
          </Link>
          <Link
            href="https://neshan.org/maps/@35.768786,51.03748,15z,0p/places/a8cd9e96717da82486274304e6d7f87f"
            target="_blank"
            className="font-bold text-center text-[#4D4A23] bg-[#807B3B0F] border border-[#807B3B] p-3 rounded-3xl"
          >
            نشان
          </Link>
        </div>
        <Image
          src="/images/bottom.png"
          alt="bottom image"
          width={342}
          height={32}
          className="w-[342px] h-[32px] mt-6 mb-48 xs:mb-20"
        />
        <Image
          src="/images/envelop.png"
          alt="top left image"
          width={430}
          height={200}
          className="w-[430px] h-[200px] bottom-0 fixed xs:hidden"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
