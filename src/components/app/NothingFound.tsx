import Link from "next/link";

type NothingFoundProps = {
  title: string;
  msg: string;
  link?: string;
  linkText?: string;
};

export default function NothingFound({
  title,
  msg,
  link,
  linkText = "Back to Shop",
}: NothingFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <h3 className="text-[20px]! mb-2! font-semibold tracking-tight text-gray-700! dark:text-white">
        {title}
      </h3>

      <p className="text-[15px]! leading-6 text-gray-400! ">{msg}</p>

      {link && (
        <Link href={link} className="mt-4 loginLogoutBtn">
          {linkText}
        </Link>
      )}
    </div>
  );
}
