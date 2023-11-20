import { expect as baseExpect, Response } from '@playwright/test';
export { test } from '@playwright/test';

export const expect = baseExpect.extend({
	toContainValue(receive: any [], value: any) {
        const pass = receive.includes(value);
		const message = pass ? 'passed' : `expected ${receive} to contain ${value}`;
		return { pass, message: () => message };
    },
	toEachHaveValue(receive: any [], value: any) {
        const pass = receive.every(v => v === value);
		const message = pass ? 'passed' : `expected ${receive} to each have ${value}`;
		return { pass, message: () => message };
    },
	async toHaveStatusCode(receive: Promise<Response>, status: number) {
		const pass = (await receive).status() === status
		const message = pass ? 'passed' : `expected response to have status ${status}`;
		return { 
			pass, 
			message: () => message, 
			name: 'toHaveStatusCode', 
			expected: status, 
			actual: (await receive).status() 
		};
	},
    async toHaveStatusOk(receive: Promise<Response>) {
		const pass = (await receive).ok();
		const message = pass ? 'passed' : 'expected response to have status OK';
		return { 
			pass, 
			message: () => message, 
			name: 'toHaveStatusOk', 
			expected: true, 
			actual: pass
		};
	}
});