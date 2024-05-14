import { useEffect, useState } from "react";

import iconDelete from "@/public/images/icons/iconDelete.png";
import HollowButton from "@/components/ui/buttons/HollowButton";
import FullButton from "@/components/ui/buttons/FullButton";

import "@/styles/counselor.css";

const ModalAppointmentInfo = ({
	setAppointmentModal,
	selectedID,
	appointments,
}) => {
	const [isChecked, setIsChecked] = useState(true);
	const [appointment, setAppointment] = useState(null);

	// for dialog
	const toggleChecked = () => {
		setIsChecked(!isChecked);
	};

	// find appointments
	useEffect(() => {
		const handleFindAppointment = () => {
			const foundAppointment = appointments.find(
				(appointment) => appointment.id === selectedID
			);
			setAppointment(foundAppointment);
		};

		handleFindAppointment();
	}, [selectedID, appointments]);

	// handle response
	const handleResponse = () => {
		console.log(response);

		// logic to update appointment response, mollaeyo

		// set appointment.status to "Responded", "Pending", "Appointed"
	};

	return (
		<>
			<input
				type="checkbox"
				id="my_modal_7"
				className="modal-toggle"
				checked={isChecked}
				onChange={toggleChecked}
			/>
			<div className="modal" role="dialog">
				<div className="modal-box p-9 text-left max-w-2xl max-h-fit">
					<img
						src={iconDelete.src} // change to setter avatar
						alt="setter avatar"
						className="w-24 h-24 flex justify-center mx-auto"
					/>

					<table className="my-4">
						<tbody>
							<tr>
								<th>ID Number:</th>
								<td>
									{appointment
										? appointment.setter.idNumber
										: ""}
								</td>
							</tr>
							<tr>
								<th>Name:</th>
								<td>
									{appointment ? appointment.setter.name : ""}
								</td>
							</tr>
							<tr>
								<th>Purpose:</th>
								<td>
									{appointment ? appointment.subject : ""}
								</td>
							</tr>
							<tr>
								<th>Addtional Notes:</th>
								<td>
									{appointment ? appointment.details : ""}
								</td>
							</tr>
							<tr>
								<th>Date:</th>
								<td>{appointment ? appointment.date : ""}</td>
							</tr>
							<tr>
								<th>Time:</th>
								<td>{appointment ? appointment.time : ""}</td>
							</tr>
							<tr>
								<th>Status:</th>
								<td
									className={`h-fit badge badge-md ${
										appointment?.status === "Pending"
											? "badge-warning"
											: "badge-success"
									}`}
									style={{ width: "30%" }}
								>
									{appointment ? appointment.status : ""}
								</td>
							</tr>
						</tbody>
					</table>

					<div className="flex flex-row gap-x-4 mt-6 px-14">
						<HollowButton onClick={() => setConfirmResponse(true)}>
							Reschedule
						</HollowButton>
						<FullButton onClick={() => setConfirmResponse(true)}>
							Update Status
						</FullButton>
					</div>
				</div>
				<label
					className="modal-backdrop"
					htmlFor="my_modal_7"
					onClick={() => setAppointmentModal(false)}
				>
					Close
				</label>
			</div>
		</>
	);
};

export default ModalAppointmentInfo;
