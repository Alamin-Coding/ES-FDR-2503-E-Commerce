import Button from "../components/Button";
import Container from "../components/Container";
import Section from "../components/Section";

// import image
import Side from "../assets/side.jpg";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router";
const LoginPage = () => {
	const { loginUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = {};
		// data.email = formData.get("email");
		// data.password = formData.get("password");

		// data["email"] = formData.get("email");
		// data["password"] = formData.get("password");

		for (let [key, value] of formData) {
			data[key] = value;
		}

		loginUser(data.email, data.password);

		// Redirect to the home page
		navigate("/");
	};

	return (
		<Section className="pt-15 pb-35">
			<div className="grid grid-cols-[auto_1fr] items-center gap-[129px]">
				<div>
					<img src={Side} alt="" />
				</div>
				<div className="max-w-[371px]">
					<h3 className="text-black font-inter font-medium text-[36px] leading-[30px]">
						Log in to Exclusive
					</h3>
					<p className="text-black text-base font-normal pt-6 pb-12">
						Enter your details below
					</p>
					<form
						action=""
						className="flex flex-col gap-10 w-[370px]"
						onSubmit={handleLogin}
					>
						<input
							className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
							type="text"
							name="email"
							id=""
							placeholder="Email or Phone Number"
						/>
						<input
							className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
							type="password"
							name="password"
							id=""
							placeholder="Password"
						/>
						<div className="flex items-center justify-between pt-10">
							<Button type="submit">Log In</Button>
							<span className="text-base font-normal text-my_secondary">
								Forget Password?
							</span>
						</div>
					</form>
				</div>
			</div>
		</Section>
	);
};

export default LoginPage;
