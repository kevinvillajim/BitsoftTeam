import Card2 from "./Card2";

export default function Historia({cards}) {
	return (
		<>
			<div id="container-design">
				<div id="container-cards2">
					{cards.map((card, index) => (
						<Card2
							img={card.img}
							subTitle={card.subTitle}
							title={card.title}
							type={card.type}
							key={index}
						/>
					))}
				</div>
			</div>
		</>
	);
}
