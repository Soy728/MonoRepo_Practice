import { parse } from '@common/parser';

export function add(num1: string, num2: string) {
	return parse(num1) + parse(num2);
}
