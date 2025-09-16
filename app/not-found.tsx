import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div>
      <h2 className="font-medium mb-16">
        404 <span className="text-muted font-normal">- Not Found</span>
      </h2>
      <Link
        href="/"
        className="underline decoration-muted hover:decoration-foreground"
      >
        Return Home
      </Link>
    </div>
  );
}
