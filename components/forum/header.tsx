"use client";

type Props = {
  title: string,
  subTitle: string,
}

export default function Header({ title, subTitle }: Props) {
  return (
    <div className="h-[8.75rem] shrink-0 flex flex-col items-center justify-center gap-[0.5rem] text-left text-[1.13rem] text-darkseagreen font-poppins">
      <h2 className="relative font-semibold"> {title} </h2>
      <b className="relative text-[1.5rem] text-center inline-block text-dimgray">
        {subTitle}
      </b>
    </div>
  )
}
