import { useState } from "react";
import QRCodeImage from "../assets/QrCode.png";
import appleImage from "../assets/appstore.png";
import googlePlayStoreImage from "../assets/google-play-store.png";

import facebookIcon from "../assets/icons/facebook.png";

const QRCodeSVG = () => <img src={QRCodeImage} alt="QR Code" />;

const FacebookIcon = () => <img src={facebookIcon} alt="facebook icon" />;

const TwitterIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
		<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
	</svg>
);

const InstagramIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		className="w-5 h-5"
	>
		<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
	</svg>
);

const LinkedInIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

const GooglePlayIcon = () => (
	<img src={googlePlayStoreImage} alt="Google Play Store" />
);

const AppleIcon = () => <img src={appleImage} alt="Apple Store" />;

const Footer = () => {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const handleSubscribe = (e) => {
		e.preventDefault();
		if (email.trim()) {
			setSubscribed(true);
			setEmail("");
			setTimeout(() => setSubscribed(false), 3000);
		}
	};

	return (
		<footer
			style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
			className="bg-[#111111] text-white border-t border-[#DB4444]/60"
		>
			<div className="max-w-7xl mx-auto px-6 py-14">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
					{/* Exclusive / Subscribe */}
					<div className="lg:col-span-1">
						<h2 className="text-2xl font-bold tracking-tight mb-4 text-white">
							Exclusive
						</h2>
						<p className="text-base font-semibold text-white mb-1">Subscribe</p>
						<p className="text-sm text-gray-400 mb-4">
							Get 10% off your first order
						</p>
						<form
							onSubmit={handleSubscribe}
							className="relative flex items-center"
						>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
								className="w-full bg-transparent border border-gray-500 rounded text-sm text-gray-300 placeholder-gray-500 px-3 py-2 pr-10 focus:outline-none focus:border-[#DB4444] transition-colors duration-200"
							/>
							<button
								type="submit"
								className="absolute right-2 text-gray-400 hover:text-[#DB4444] transition-colors duration-200"
								aria-label="Subscribe"
							>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="w-4 h-4"
								>
									<line x1="22" y1="2" x2="11" y2="13" />
									<polygon points="22 2 15 22 11 13 2 9 22 2" />
								</svg>
							</button>
						</form>
						{subscribed && (
							<p className="text-xs text-green-400 mt-2">
								Thanks for subscribing! 🎉
							</p>
						)}
					</div>

					{/* Support */}
					<div className="lg:col-span-1">
						<h3 className="text-base font-semibold mb-5 text-white">Support</h3>
						<address className="not-italic space-y-3 text-sm text-gray-400 leading-relaxed">
							<p>
								111 Bijoy sarani, Dhaka,
								<br />
								DH 1515, Bangladesh.
							</p>
							<p>
								<a
									href="mailto:exclusive@gmail.com"
									className="hover:text-[#DB4444] transition-colors"
								>
									exclusive@gmail.com
								</a>
							</p>
							<p>
								<a
									href="tel:+88015-88888-9999"
									className="hover:text-[#DB4444] transition-colors"
								>
									+88015-88888-9999
								</a>
							</p>
						</address>
					</div>

					{/* Account */}
					<div className="lg:col-span-1">
						<h3 className="text-base font-semibold mb-5 text-white">Account</h3>
						<ul className="space-y-3 text-sm text-gray-400">
							{[
								"My Account",
								"Login / Register",
								"Cart",
								"Wishlist",
								"Shop",
							].map((item) => (
								<li key={item}>
									<a
										href="#"
										className="hover:text-[#DB4444] transition-colors duration-200 hover:translate-x-1 inline-block"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Quick Link */}
					<div className="lg:col-span-1">
						<h3 className="text-base font-semibold mb-5 text-white">
							Quick Link
						</h3>
						<ul className="space-y-3 text-sm text-gray-400">
							{["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
								(item) => (
									<li key={item}>
										<a
											href="#"
											className="hover:text-[#DB4444] transition-colors duration-200 hover:translate-x-1 inline-block"
										>
											{item}
										</a>
									</li>
								),
							)}
						</ul>
					</div>

					{/* Download App */}
					<div className="lg:col-span-1">
						<h3 className="text-base font-semibold mb-3 text-white">
							Download App
						</h3>
						<p className="text-xs text-gray-500 mb-3">
							Save $3 with App New User Only
						</p>

						<div className="flex items-center gap-3 mb-4">
							{/* QR Code */}
							<div className="bg-white rounded size-20 flex-shrink-0 flex items-center justify-center">
								<QRCodeSVG />
							</div>

							{/* Store Buttons */}
							<div className="flex flex-col gap-2">
								<a href="#" className="flex items-center">
									<GooglePlayIcon />
								</a>
								<a href="#" className="flex items-center">
									<AppleIcon />
								</a>
							</div>
						</div>

						{/* Social Icons */}
						<div className="flex items-center gap-6 mt-6">
							{[
								{ Icon: FacebookIcon, label: "Facebook" },
								{ Icon: TwitterIcon, label: "Twitter" },
								{ Icon: InstagramIcon, label: "Instagram" },
								{ Icon: LinkedInIcon, label: "LinkedIn" },
							].map(({ Icon, label }) => (
								<a
									key={label}
									href="#"
									aria-label={label}
									className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
								>
									<Icon />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-gray-500">
					© Copyright Rimel 2022. All right reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;
