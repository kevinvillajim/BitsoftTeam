import Button from "./Button";

export default function BannerS({
	img,
	title,
	content,
	position,
	height,
	fixed,
	otherContainer,
	otherText,
	textColor,
	textColor1,
	btn,
}) {
	return (
		<>
			<div
				className={`w-screen flex justify-center ${
					otherContainer ? {otherContainer} : "items-center"
				} ${fixed ? "bg-fixed" : ""} flex-col sm:p-[0.2rem] sm:text-center`}
				style={{
					backgroundImage: `url(${img})`,
					backgroundSize: "cover",
					backgroundPosition: `${position}`,
					height: height,
				}}
			>
				<div className={otherText}>
					<div>
						<h1 className={`font-bold text-[40px] ${textColor}`}>{title}</h1>
					</div>
					<div className="my-[2rem]">
						<p className={`text-[25px] ${textColor1}`}>{content}</p>
					</div>
					{btn ? (
						<Button
							title={btn.title}
							text={btn.title}
							dark={btn.dark}
							onClick={btn.onClick}
						/>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
}
