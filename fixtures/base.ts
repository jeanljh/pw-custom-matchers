import { expect as baseExpect, Response } from '@playwright/test';
export { test } from '@playwright/test';

export const expect = baseExpect.extend({
	toContainValue(received: any [], value: any) {
        const pass = received.includes(value);
		const message = pass ? 'passed' : `expected ${received} to contain ${value}`;
		return { pass, message: () => message };
    },
	toEachHaveValue(received: any [], value: any) {
        const pass = received.every(v => v === value);
		const message = pass ? 'passed' : `expected ${received} to each have ${value}`;
		return { pass, message: () => message };
    },
	async toHaveStatusCode(received: Promise<Response>, status: number) {
		const pass = (await received).status() === status
		const message = pass ? 'passed' : `expected response to have status ${status}`;
		return { 
			pass, 
			message: () => message, 
			name: 'toHaveStatusCode', 
			expected: status, 
			actual: (await received).status() 
		};
	},
    async toHaveStatusOk(received: Promise<Response>) {
		const pass = (await received).ok();
		const message = pass ? 'passed' : `expected response to have status OK`;
		return { 
			pass, 
			message: () => message, 
			name: 'toHaveStatusOk', 
			expected: true, 
			actual: pass
		};
	}
});
