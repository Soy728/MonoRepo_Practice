import { parse } from 'parser';

export default function add(num1: string, num2: string) {
	return parse(num1) + parse(num2);
}
