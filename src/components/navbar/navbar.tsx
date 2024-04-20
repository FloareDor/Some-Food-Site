import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
	return (
		<div className="flex flex-row items-center justify-between">
			<div className="flex flex-row gap-6">
				<Link href={'/'}> <Image src="/images/navbar/dashboard.svg" alt="dashboard" width={40} height={40} /></Link>
				<Link href={'/'}> <Image src="/images/navbar/pie.svg" alt="dashboard" width={40} height={40} /></Link>
			</div>
			<div className="flex flex-row gap-6">
				<Link href={'/'}> <Image src="/images/navbar/group.svg" alt="dashboard" width={40} height={40} /></Link>
				<Link href={'/'}> <Image src="/images/navbar/person.svg" alt="dashboard" width={40} height={40} /></Link>
			</div>
		</div>
	);
	
}

export default Navbar;
