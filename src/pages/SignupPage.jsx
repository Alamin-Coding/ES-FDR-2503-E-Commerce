import Section from "../components/Section";
import Side from "../assets/side.jpg";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router";
import { GoogleIcon } from "../components/icons/GoogleIcon";
import SecondaryButton from "../components/SecondaryButton";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import Loading from "../components/Loading";
const SignupPage = () => {
	const { signUP, signUpWithGoogle, loading } = useContext(AuthContext);

	const [userValue, setUserValue] = useState({
		name: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserValue((prev) => {
			return { ...prev, [name]: value };
		});
	};
	const handleSignup = async () => {
		try {
			const res = await signUP(userValue.email, userValue.password);
			setUserValue({
				name: "",
				email: "",
				password: "",
			});
			// navigate("/login");
		} catch (error) {
			console.log(error);
		}
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<Section className="pt-15 pb-35">
			<div className="grid grid-cols-2 items-center">
				<div>
					<img src={Side} alt="" />
				</div>
				<div className="max-w-[371px]">
					<h3 className="text-black font-inter font-medium text-[36px] leading-[30px]">
						Create an account
					</h3>
					<p className="text-black text-base font-normal pt-6 pb-12">
						Enter your details below
					</p>
					<form action="" className="flex flex-col gap-10 w-[370px]">
						<input
							className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
							type="text"
							name="name"
							id=""
							placeholder="name"
							value={userValue.name}
							onChange={(e) => handleInputChange(e)}
						/>
						<input
							className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
							type="text"
							name="email"
							id=""
							placeholder="Email or Phone Number"
							value={userValue.email}
							onChange={(e) => handleInputChange(e)}
						/>
						<input
							className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
							type="password"
							name="password"
							id=""
							placeholder="Password"
							value={userValue.password}
							onChange={(e) => handleInputChange(e)}
						/>
					</form>
					<div className="flex flex-col items-center justify-between gap-4 w-full pt-10">
						<Button className="w-full" onClick={handleSignup}>
							Create Account
						</Button>
						<SecondaryButton
							onClick={() => signUpWithGoogle()}
							className="w-full bg-white !text-black"
						>
							<GoogleIcon /> Sign up with Google
						</SecondaryButton>
					</div>
					<div className="flex items-center justify-center gap-4 pt-8">
						<p className="text-base font-normal text-[#000000]/70">
							Already have account?
						</p>
						<Link to="/login">
							<span className="text-base font-normal text-[#000000]/70">
								Log in
							</span>
						</Link>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default SignupPage;
