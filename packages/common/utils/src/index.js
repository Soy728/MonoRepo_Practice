import { parse } from '@common/parser';
export function add(num1, num2) {
    return parse(num1) + parse(num2);
}
