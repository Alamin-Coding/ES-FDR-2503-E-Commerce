import CartTable from "../components/CartTable";
import CartTotal from "../components/CartTotal";
import Container from "../components/Container";
import Section from "../components/Section";
const CartPage = () => {
	return (
		<Section className="pt-20 bg-white">
			<Container>
				<CartTable />
				<CartTotal />
			</Container>
		</Section>
	);
};

export default CartPage;
