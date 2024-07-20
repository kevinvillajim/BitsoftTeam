export default function Icons({icons}) {
	return (
		<>
			<div className="flex justify-around items-center mb-8">
				{icons.map((icon, index) => (
					<div className="flex flex-col items-center" key={index}>
						<img src={icon.img} alt={icon.alt} className="mb-2" />
						<span className="text-center">{icon.title}</span>
					</div>
				))}
			</div>
		</>
	);
}
