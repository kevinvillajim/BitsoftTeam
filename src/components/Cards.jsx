import Button from "./Button";

export default function Cards({cards}) {
	return (
		<>
			<div className="bg-background text-foreground">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
					{cards.map((card, index) => (
						<div className="text-center" key={index}>
							<img src={card.img} alt={card.alt} className="w-full h-auto" />
							<h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
							<p className="mt-2 text-muted-foreground card-description">
								{card.description}
							</p>
							<div className="mt-4">
								<Button
									link={card.link}
									title={card.btnText.toLowerCase()}
									text={card.btnText}
									dark={true}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
