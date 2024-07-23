import Card2 from "./Card2";

export default function Historia({title, cards}) {
	return (
		<>
			<div id="container-design">
				<span id="subtitle3" className="poppins">
					{title}
				</span>
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
