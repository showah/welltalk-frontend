import FullButton from "../buttons/FullButton";
import HollowButton from "../buttons/HollowButton";

const ConfirmationPopUp = ({
	title,
	description,
	onCancel,
	onCancelLabel,
	onConfirm,
	onConfirmLabel,
}) => {
	return (
		<div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 ">
			<div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white relative">
				<img
					src="/images/confirmation.png"
					className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-20 w-20 z-50"
					alt="Confirmation"
				/>
				<div className="w-full">
					<div className="m-8 my-20 max-w-[400px] mx-auto">
						<div className="mb-8">
							<h1 className="mb-4 text-3xl font-extrabold">
								{title}
							</h1>
							<p className="text-gray-600">{description}</p>
						</div>
						<div className="space-y-4 sm:space-y-4 flex flex-col sm:sm:justify-center">
							<FullButton onClick={onConfirm}>
								{onConfirmLabel}
							</FullButton>
							<HollowButton onClick={onCancel}>
								{onCancelLabel}
							</HollowButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationPopUp;
