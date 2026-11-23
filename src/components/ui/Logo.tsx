import Link from "next/link";
import "../../styles/components/ui/logo.css";
import { griffy } from "@/src/app/fonts";

export default function Logo() {
  return (
    <Link href="/" className={`logo ${griffy.className}`}>
      <span className="logo-mark" aria-hidden="true">
        ✿
      </span>
      TinyTrends
    </Link>
  );
}
