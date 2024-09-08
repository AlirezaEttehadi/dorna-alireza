import { AlexBrushFont } from "@dorna-alireza/fonts/alex-brush";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="w-[390px] px-4 flex flex-col items-center justify-center">
        <Image
          src="/images/top-left.png"
          alt="top left image"
          width={117}
          height={80}
          className="w-[117px] h-[80px] left-3 top-11 absolute"
        />
        <Image
          src="/images/top-right.png"
          alt="top right image"
          width={117}
          height={80}
          className="w-[117px] h-[80px] right-3 top-11 absolute"
        />
        <div className="pt-28">
          <Image
            src="/images/hero.png"
            alt="hero image"
            width={382}
            height={450}
            className="w-[382px] h-[450px]"
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
        <p className="text-2xl text-center my-10 text-[#404040]">
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
          <div className="flex flex-col">
            <Image
              src="/images/day.png"
              alt="day image"
              width={173}
              height={238}
              className="w-[173px] h-[238px]"
            />
            <Image
              src="/images/month.png"
              alt="month image"
              width={173}
              height={238}
              className="w-[173px] h-[238px]"
            />
            <Image
              src="/images/year.png"
              alt="year image"
              width={173}
              height={238}
              className="w-[173px] h-[238px]"
            />
          </div>
        </div>
        <p className="text-center my-6 font-semibold text-xl text-[#404040]">
          جاده مخصوص کرج - بعد از میدان اتمسفر - اولین دور برگردان به سمت تهران
          - خیابان طالقانی - کوچه سفید - باغ تالار سفید
        </p>
        <button className="font-bold text-[#4D4A23] bg-[#807B3B0F] border border-[#807B3B] p-3 rounded-3xl w-full">
          مسیریابی
        </button>
        <Image
          src="/images/bottom.png"
          alt="bottom image"
          width={342}
          height={32}
          className="w-[342px] h-[32px] my-6"
        />
      </div>
    </div>
  );
}
