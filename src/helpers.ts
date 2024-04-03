export function getAge(birthDate: Date): number {
	const today = new Date();
	const age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		return age - 1;
	}
	return age;
}
