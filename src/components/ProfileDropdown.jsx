import {
	User,
	ShoppingBag,
	XCircle,
	Star,
	LogOut as LogOutIcon,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const menuItems = [
	{ label: "Manage My Account", icon: User },
	{ label: "My Order", icon: ShoppingBag },
	{ label: "My Cancellations", icon: XCircle },
	{ label: "My Reviews", icon: Star },
	// { label: "Logout", icon: LogOut, divider: true },
];
const ProfileDropdown = ({ className }) => {
	const { user, logOutUser, abc } = useContext(AuthContext);

	console.log(abc);
	return (
		<div className={`absolute top-6 right-0 mt-2 z-30 ${className}`}>
			<div className="bg-[#1e1b3a] rounded-xl p-2 w-56 border border-white/10 shadow-lg">
				{menuItems.map(({ label, icon: Icon, divider }) => (
					<button
						key={label}
						className={`
						flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm
						text-white/85 hover:bg-purple-500/20 transition-colors duration-150
						${divider ? "mt-1 border-t border-white/10 pt-3" : ""}
					`}
					>
						<Icon size={18} className="text-white/60 shrink-0" />
						<span>{label}</span>
					</button>
				))}

				<button
					className={`
						flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm
						text-white/85 hover:bg-purple-500/20 transition-colors duration-150 mt-1 border-t border-white/10 pt-3
						}
					`}
					onClick={logOutUser}
				>
					<LogOutIcon size={18} className="text-white/60 shrink-0" />
					<span>Logout</span>
				</button>
			</div>
		</div>
	);
};

export default ProfileDropdown;
