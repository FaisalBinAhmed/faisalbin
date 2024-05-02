export function getApproximateAge() {
	const birthDate = new Date("December 01, 1994 00:00:01");
	const currentDate = new Date();
	const age = currentDate.getFullYear() - birthDate.getFullYear();
	const m = currentDate.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
		return age - 1;
	}
	return age;
}
