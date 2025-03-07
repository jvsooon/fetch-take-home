import { title } from "@/components/primitives";

export default function SearchPage() {
  return (
    <div>
      <h1 className={title()}>Search</h1>
      <div className="inline-block justify-center max-w-xl text-center">
        <span className={title()}>Here at&nbsp;</span>
        <span className={title({ color: "violet" })}>Fetch,&nbsp;</span>
        <br />
        <span className={title()}>
          we love dogs, and hope you do too!
        </span>
      </div>
    </div>
  );
}
