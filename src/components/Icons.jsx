export default function Icons({icons}) {
	return (
		<>
			<div className="flex justify-around items-center mb-[10rem] mt-[5rem] iconsContainer">
				{icons.map((icon, index) => (
					<div className="flex flex-col items-center" key={index}>
						<div className="w-[200px] h-[200px] animatedBg">
							<img
								src={icon.img}
								alt={icon.alt}
								className="mb-2 object-cover w-full h-full "
							/>
						</div>
						<span className="text-center">{icon.title}</span>
					</div>
				))}
			</div>
		</>
	);
}
