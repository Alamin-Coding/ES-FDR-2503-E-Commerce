import Button from "../components/Button";
import Container from "../components/Container";
import Section from "../components/Section";

// import image
import Side from "../assets/side.png";
const LoginPage = () => {
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
            <form action="" className="flex flex-col gap-10 w-[370px]">
              <input
                className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
                type="text"
                name=""
                id=""
                placeholder="Email or Phone Number"
              />
              <input
                className="border-b border-border focus:outline-0 placeholder:text-[#000000]/40"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </form>
            <div className="flex items-center justify-between pt-10">
              <Button>Log In</Button>
              <span className="text-base font-normal text-secondary">
                Forget Password?
              </span>
            </div>
          </div>
        </div>
    </Section>
  );
};

export default LoginPage;
