import React from "react";
import UserLevel from "../components/UserLevel";
import UserEducation from "../components/UserEducation";
const Profile = () => {
	const [showModal, setShowModal] = React.useState(false);
	const [isFullInfo, setFullInfo] = React.useState(false);

	return (
		<>
			{showModal ? (
				<UserLevel active={showModal} setActive={setShowModal} isFull={isFullInfo} setFull={setFullInfo} />
			) : (
				<div className="font-lato font-bold">
					<div className="text-center mt-16">
						<p className="text-smrtBlack shadow1">Мейрамбеков Нурсултан</p>
						<p className="text-primary text-3xl mt-4"> Моя страница</p>
					</div>

					<div className="flex flex-row mt-16 mb-16 gap-16 justify-center ">
						<div className="w-[560px] h-[585px] border-[1px] border-practiceBorderGray rounded profileShadow">
							<div className="py-12 flex flex-col items-center gap-14">
								<div className="w-[470px] h-[90px]">
									<p className="text-sm tracking-widest text-smrtBlack">Экзамен</p>
									<p className="text-[32px] text-smrtBlue">Выберите экзамен</p>
									<p className="font-normal">
										Информация о текущем экзамене frkopfkropfkoprkfoprfkropfkorkoofkrofk fkoropfk
									</p>
								</div>

								<div className="w-[470px] h-[90px]">
									<p className="text-sm tracking-widest text-smrtBlack">Время подготовки</p>
									<p className="text-[32px] text-smrtBlue">Выберите дату</p>
									<p className="font-normal">
										Время за которое ты сможешь улучшить свой уровень и достигнуть желаемого
										результата!
									</p>
								</div>

								<div className="w-[470px] h-[90px]">
									<p className="text-sm tracking-widest text-smrtBlack">Ожидаемый результат</p>
									<p className="text-[32px] text-smrtBlue">Выберите уровень</p>
									<p className="font-normal">Информация о желаемом уровне</p>
								</div>

								<div className="w-[470px] text-center">
									<button className="w-[345px] h-[54px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out">
										Изменить
									</button>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-8">
							<div className="w-[515px] h-[275px] text-center border-[1px] border-practiceBorderGray rounded profileShadow flex flex-col justify-center align-center">
								<div className="w-[350px] flex flex-col m-auto gap-3">
									<p className="text-[32px] text-smrtBlue">Количество занятий</p>
									<p className="font-normal text-practiceGray">IELTS/SAT</p>
									<p className="text-lg">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus tincidunt{" "}
									</p>
									<button className="w-[350px] h-[45px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out">
										Изменить
									</button>
								</div>
							</div>
							<div className="w-[515px] h-[275px] text-center border-[1px] border-practiceBorderGray rounded profileShadow flex flex-col justify-center align-center">
								<div className="w-[350px] flex flex-col m-auto gap-3">
									<p className="text-[32px] text-smrtBlue">Текущий уровень</p>
									<p className="font-normal text-practiceGray">IELTS/SAT</p>
									<p className="text-lg">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus tincidunt{" "}
									</p>
									<button
										type="button"
										onClick={() => setShowModal(true)}
										className="w-[350px] h-[45px] border-[1px] border-smrtBlue text-white bg-smrtBlue text-sm rounded hover:bg-blue-700 hover:ease-in-out"
									>
										{isFullInfo ? "Открыть" : "Изменить"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Profile;
