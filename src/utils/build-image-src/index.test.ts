import { buildImageSrc } from ".";
import { describe, expect, it } from "vitest";

describe("Building image src", () => {
	const basePath = "/next-app";
	it(`/next.svg -> ${basePath}/next.svg`, () => {
		expect(buildImageSrc("/next.svg")).toBe("/next-app/next.svg");
	});
	it(`next.svg -> ${basePath}/next.svg`, () => {
		expect(buildImageSrc("next.svg")).toBe("/next-app/next.svg");
	});
});
