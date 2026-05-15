import { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [errorMessage, setErrorMesssage] = useState({
		nameError: "",
		emailError: "",
		phoneError: "",
	});

	const hanndleSubmit = (e) => {
		e.preventDefault();

		const errors = {
			nameError: "",
			emailError: "",
			phoneError: "",
		};

		let isValid = true;
		if (formData.name.trim() === "") {
			errors.nameError = "Name is required";
			isValid = false;
		}
		if (formData.email.trim() === "") {
			errors.emailError = "Email is required";
			isValid = false;
		}
		if (formData.phone.trim() === "") {
			errors.phoneError = "Phone is required";
			isValid = false;
		}

		setErrorMesssage(errors);

		if (isValid) {
			console.log("Form submitted successfully!", formData);
			setFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			});
		}
	};

	const hanndleChange = (e) => {
		const { name, value } = e.target;

		setFormData((preValue) => {
			return { ...preValue, [name]: value };
		});
		setErrorMesssage((prev) => {
			return { ...prev, [`${name}Error`]: "" };
		});
	};

	return (
		<div className="bg-white rounded-sm shadow-xs border border-gray-100 ">
			<form className="py-11.5 px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="relative">
						<input
							type="text"
							placeholder="Your Name"
							name="name"
							value={formData.name}
							className={`w-full px-4 py-3 rounded-sm border ${errorMessage.nameError ? "border-red-400" : "border-gray-200"} bg-gray-50 placeholder-gray-400 focus:outline-none`}
							required
							onChange={(e) => hanndleChange(e)}
						/>
						<span className="text-[#E89C9C] absolute top-3 left-27.5">*</span>
						{errorMessage.nameError && (
							<small className="text-sm h-3 text-red-500">
								{errorMessage.nameError}
							</small>
						)}
					</div>
					<div className="relative">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							value={formData.email}
							className={`w-full px-4 py-3 rounded-sm border ${errorMessage.emailError ? "border-red-400" : "border-gray-200"} bg-gray-50 placeholder-gray-400 focus:outline-none`}
							required
							onChange={(e) => hanndleChange(e)}
						/>
						<span className="text-[#E89C9C] absolute top-3 left-33.5">*</span>
						{errorMessage.emailError && (
							<small className="text-sm h-3 text-red-500">
								{errorMessage.emailError}
							</small>
						)}
					</div>
					<div className="relative">
						<input
							type="tel"
							placeholder="Phone Number"
							className={`w-full px-4 py-3 rounded-sm border ${errorMessage.emailError ? "border-red-400" : "border-gray-200"} bg-gray-50 placeholder-gray-400 focus:outline-none`}
							name="phone"
							value={formData.phone}
							required
							onChange={(e) => hanndleChange(e)}
						/>
						<span className="text-[#E89C9C] absolute top-3 left-34.5">*</span>
						{errorMessage.phoneError && (
							<small className="text-sm h-3 text-red-500">
								{errorMessage.phoneError}
							</small>
						)}
					</div>
				</div>
				<div className=" mt-8">
					<textarea
						placeholder="Your Message"
						rows="5"
						name="message"
						value={formData.message}
						className="w-full pl-4 pt-3 pb-16.5 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none "
						onChange={(e) => hanndleChange(e)}
					></textarea>
				</div>
				<div className="relative pt-8 pb-10">
					<button
						type="submit"
						className=" bg-my_secondary hover:bg-red-600 text-white font-medium py-4 px-12 rounded-sm transition-colors duration-200 absolute right-0 cursor-pointer"
						onClick={(e) => hanndleSubmit(e)}
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
