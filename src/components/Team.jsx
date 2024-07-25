export default function Team({title, subtitle, text, imgs}) {
	return (
		<>
			<div id="team" className="mt-[5rem] px-[4rem]">
				<div id="team-text">
					<span id="text1">{title}</span>
					<span id="text2">{subtitle}</span>
					<span id="text3">{text}</span>
				</div>
				<div id="team-img-container">
					{/* <div id="left"></div> */}
					{imgs.map((img, index) => (
						<div className="flip-card" key={index}>
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img src={img.img} alt="Avatar" />
								</div>
								<div className="flip-card-back">
									<h2 className="text-[30px]">{img.name}</h2>
									<p>{img.cargo}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
