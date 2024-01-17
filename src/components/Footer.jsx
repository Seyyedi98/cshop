import Logo from "./ui/Navbar/Logo";

function Footer() {
  return (
    <div className="border-t-2 border-solid border-slate-100 p-24">
      <div className="container flex flex-wrap items-center justify-between gap-12">
        <ul className="flex flex-col gap-4">
          <Logo size="small" />
          <li className="text-sm">Facebook</li>
          <li className="text-sm">Youtube</li>
          <li className="text-sm">Twitter</li>
          <li className="text-sm">Facebook</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="font-semibold text-neutral-700 ">Getting started</li>
          <li className="text-sm">Release Notes</li>
          <li className="text-sm">Upgrade Guide</li>
          <li className="text-sm"> Browser Support</li>
          <li className="text-sm">Dark Mode</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="font-semibold text-neutral-700 ">Explore</li>
          <li className="text-sm">Prototyping</li>
          <li className="text-sm">Design systems</li>
          <li className="text-sm">Pricing</li>
          <li className="text-sm">Security</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="font-semibold text-neutral-700 ">Resources</li>
          <li className="text-sm">Best practices</li>
          <li className="text-sm">Support</li>
          <li className="text-sm">Developers</li>
          <li className="text-sm">Learn design</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="font-semibold text-neutral-700 ">Community</li>
          <li className="text-sm">Discussion Forums</li>
          <li className="text-sm">Code of Conduct</li>
          <li className="text-sm">Contributing</li>
          <li className="text-sm">API Reference</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
