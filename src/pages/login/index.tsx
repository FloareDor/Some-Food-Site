import Image from "next/image";
import Link from "next/link";
const login = () => {
	return (
		<div className="bg-white min-h-screen flex items-center justify-center">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-full">
					
				<div className="flex flex-col gap-10 items-left justify-start px-8 py-[14vh] lg:px-16 h-screen">
					<span className="text-black font-bold text-2xl md:text-3xl w-full sm:w-2/3 sm:text-center">Access Your Account</span>

					<div className="rounded-lg border-2 border-solid border-gray-200 w-full lg:w-2/3">
						<div className="flex flex-row items-center justify-center gap-4 py-2 px-10">
							<Image src={'/images/google.png'} alt="google" width={30} height={30} />
							<span className="text-black">Sign in with Google</span>
						</div>
					</div>
					<div className="relative flex flex-row items-center w-full lg:w-2/3">
						<div className="flex-grow border-b border-gray-400"></div>
						<span className="flex-shrink mx-2 text-gray-400">OR</span>
						<div className="flex-grow border-t border-gray-400"></div>
					</div>
					<div className="flex flex-col gap-6 w-full lg:w-2/3">
						<div className="rounded-lg border-gray-200">
							<input
								className="w-full h-12 rounded-lg border-2 border-solid border-gray-200 px-4 text-left text-black placeholder-gray-400 outline-none"
								placeholder="Username"
							/>
						</div>
						<div className="rounded-lg border-gray-200">
							<input
								className="w-full h-12 rounded-lg border-2 border-solid border-gray-200 px-4 text-left text-black placeholder-gray-400"
								placeholder="Password"
							/>
						</div>
						<div className="flex flex-row items-center justify-between px-0">
							<span className="text-black">Remember Me</span>
							<span className="text-black">Forgot Password?</span>
						</div>
					</div>

					<div className="bg-black rounded-lg border-2 border-solid border-gray-200 h-12 flex flex-row items-center justify-center w-full lg:w-2/3">
						<Link href={'/login'}><span className="text-white text-center">Sign in</span></Link>
					</div>
					<span className="text-black text-sm font-semibold text-center w-full lg:w-2/3">Don&apos;t have an account? Sign up</span>
				</div>
				<div className="hidden lg:block">
				<Image src={'/images/food.jpg'} alt="food" width={1000} height={1000} />
				</div>
			</div>
		</div>
	);
};

export default login;